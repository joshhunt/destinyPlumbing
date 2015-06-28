request = require 'request-promise'
Promise = require 'bluebird'
config = require './config'
path = require 'path'
fs = require 'fs'
mkdirp = require 'mkdirp'
executeTask = require './executeTask'

MANIFEST_URL = 'http://www.bungie.net/platform/Destiny/Manifest/'
BUNGIE = 'http://www.bungie.net'
PROCESS_DATABASE_TASK_NAME = 'processDatabase'

workingDirectory = path.parse(config.lastManifestLocation).dir

console.log 'Requesting', MANIFEST_URL
mkdirp workingDirectory, ->
    request MANIFEST_URL
        .then JSON.parse
        .then checkVersion
        .then createAllTasks
        .then executeTasks
        .then whenAllTasksAreDone
        # .catch handleRejection
        .then (data) ->
            console.log '\n\nAll tasks done.'
            process.exit()


# handleRejection = (err) ->
#     console.log 'Handling rejection'

formatError = (err) ->
    if not err.stack
        return err

    stack = err.stack.split '\n'
        .filter (line) -> (line.indexOf('node_modules') is -1)
        .join '\n'

    return stack

checkVersion = (manifest) -> new Promise (resolve, reject) ->
    manifestVersion = manifest.Response.version
    console.log manifestVersion

    _continue = ->
        resolve manifest.Response

    _stop = (reason) ->
        reject reason

    fs.readFile config.lastManifestLocation, 'utf8', (err, file) ->
        # If there's an error, just assume the file is missing and continue parsing
        if err
            return _continue()

        lastManifest = JSON.parse file
        if lastManifest.Response.version is manifestVersion
            return _stop 'Version is the same'

        _continue()

        fs.writeFile config.lastManifestLocation, manifest


createAllTasks = (manifest) ->
    console.log 'Manifest recieved, creating tasks'
    tasks = []

    tasks.push {
        name: 'mobileAssetContent',
        url: BUNGIE + manifest.mobileAssetContentPath,
    }

    for {version, path} in manifest.mobileGearAssetDataBases
        name = 'mobileGearAssetDatabases'
        variation = 'v' + version
        url = BUNGIE + path
        tasks.push {name, variation, url}

    for lang, path of manifest.mobileWorldContentPaths
        name = 'mobileWorldContent'
        variation = lang
        url = BUNGIE + path
        tasks.push {name, variation, url}

    # tasks.push {
    #     name: 'mobileWorldContent'
    #     variation: 'en'
    #     url: BUNGIE + manifest.mobileWorldContentPaths.en
    # }

    return tasks


executeTasks = (tasks) ->
    promises = []

    for task in tasks
        promises.push executeTask task

    Promise.settle promises


whenAllTasksAreDone = (results) ->

    console.log 'whenAllTasksAreDone called with', results.length, 'promise inspections'

    for promise in results
        if promise.isPending()
            console.log '\nPromise still pending'
        else
            if promise.isFulfilled()
                console.log '\nPromise has resolved'
                console.log promise.value()
            else
                console.log '\nPromise has rejected'
                console.log formatError promise.reason()
