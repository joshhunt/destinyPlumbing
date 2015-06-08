fs      = require 'fs'
zlib   = require 'zlib'
AWS     = require 'aws-sdk'
_       = require 'lodash'
Promise = require 'bluebird'
config  = require '../config'

config = require '../config'
s3     = new AWS.S3({region: config.awsRegion})

DRY_RUN_LOCATIONS = {
    'raw/mobileWorldContent/en/DestinyInventoryBucketDefinition.json': './working/s3DryRun/raw/mobileWorldContent/en/DestinyInventoryBucketDefinition.json'
    'raw/mobileWorldContent/en/DestinyInventoryItemDefinition.json': './working/s3DryRun/raw/mobileWorldContent/en/DestinyInventoryItemDefinition.json'
    'raw/mobileWorldContent/en/DestinyTalentGridDefinition.json': './working/s3DryRun/raw/mobileWorldContent/en/DestinyTalentGridDefinition.json'
}

getFromFilesystem = (key, keyName) ->
    localPath = DRY_RUN_LOCATIONS[key]
    if not localPath
        return null

    new Promise (resolve, reject) ->
        fs.readFile (localPath), (err, body) ->
            if keyName
                resolve [keyName, body]
            else
                resolve body

downloadSingle = (key, keyName) -> new Promise (resolve, reject) ->
    console.log 'Downloading S3 object', key

    if process.env.DRY_RUN
        localResult = getFromFilesystem key, keyName
        if localResult
            localResult
                .then resolve
                .catch reject
            return

    params =
        Bucket: config.s3Bucket
        Key: key

    _returnData = (data) ->
        if keyName
            resolve [keyName, data]
        else
            resolve data

    s3.getObject params, (err, resp) ->
        console.log 'Finished downloading', key
        return reject(err) if err

        if resp.ContentEncoding.toLowerCase() is 'gzip'
            zlib.unzip resp.Body, (err, result) ->
                _returnData result
            return

        _returnData resp.Body


downloadMultiple = (keysObj) ->
    promises = []

    for keyName, keyPath of keysObj
        promises.push downloadSingle keyPath, keyName

    Promise.all promises
        .then (results) -> _.object results


module.exports = (firstArg) ->

    if _.isObject firstArg
        downloadMultiple arguments...
    else
        downloadSingle arguments...
