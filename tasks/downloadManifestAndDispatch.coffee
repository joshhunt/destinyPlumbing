request = require 'request-promise'
Promise = require 'bluebird'
utils   = require '../utils'

MANIFEST_URL = 'http://www.bungie.net/platform/Destiny/Manifest/'
BUNGIE = 'http://www.bungie.net'
PROCESS_DATABASE_TASK_NAME = 'processDatabase'

module.exports = (taskName, taskData) ->
    console.log 'Downloading manifest from ' + MANIFEST_URL

    request MANIFEST_URL
        .then JSON.parse
        .then createAllTasks
        .then dispatchTask
        .then (results) ->
            console.log 'All dispatched.'
            return "Dispatched #{results.length} events"

createAllTasks = (manifest) ->
    console.log 'Manifest recieved, dispatching tasks via SNS'
    manifest = manifest.Response
    tasks = []

    tasks.push createTask {name: 'mobileAssetContent', url: BUNGIE + manifest.mobileAssetContentPath}

    for {version, path} in manifest.mobileGearAssetDataBases
        name = 'mobileGearAssetDatabases'
        variation = 'v' + version
        url = BUNGIE + path
        tasks.push createTask {name, variation, url}

    for lang, path of manifest.mobileWorldContentPaths
        name = 'mobileWorldContent'
        variation = lang
        url = BUNGIE + path
        tasks.push createTask {name, variation, url}

    return tasks

createTask = (data) ->
    console.log 'Adding task to queue ' + PROCESS_DATABASE_TASK_NAME
    console.log data
    return {data, task: PROCESS_DATABASE_TASK_NAME}

dispatchTask = (allTasks) ->
    masterTask =
        task: PROCESS_DATABASE_TASK_NAME
        data:
            pendingTasks: allTasks
            completedTasks: []
            completedResults: []

    utils.snsPublish masterTask