utils   = require '../utils'
Promise = require 'bluebird'
path = require 'path'

module.exports = (taskName, taskData) ->

    if taskData.pendingTasks.length is 0
        console.log 'Tasks are empty.'
        bungieManifest = taskData.completedTasks[0].bungieManifest
        return dispatchItemProcessing taskData.completedResults, bungieManifest

    [task, pendingTasks...] = taskData.pendingTasks
    {name, url, variation} = task.data

    console.log "
                Processing database:
                 - Name: #{name}
                 - Variation: #{variation}
                 - Url: #{url}
                "

    dispatchNextTask = (resultData) ->
        masterTask =
            task: taskName
            data:
                pendingTasks: pendingTasks
                completedTasks: taskData.completedTasks.concat([task])
                completedResults: taskData.completedResults

        if resultData
            result =
                name: taskName
                data: {name, url, variation}
                result: resultData

            result:
                name: 'processData'

            masterTask.data.completedResults.push result

        return utils.snsPublish masterTask


    whitelistedDatabases = [
        'mobileWorldContent'
    ]

    if name not in whitelistedDatabases
        console.log 'Attempted to process non-whitelisted database'
        return dispatchNextTask()

    dbHandler = require "../resources/dbHandlers/#{name}"

    utils.downloadFile url
        .then utils.unzipFile
        .then utils.openDatabase
        .then (db) ->
            dbHandler {db, variation, name}
        .then dispatchNextTask


dispatchItemProcessing = (completedTasks, bungieManifest) ->
    promises = []

    for completedTask in completedTasks
        createTaskFunc = itemProcessingTasks[completedTask.data.name]
        promises.push createTaskFunc completedTask

    promises.push utils.snsPublish {
        task: 'updateIndex'
        data: {bungieManifest}
    }

    Promise.all promises

itemProcessingTasks =
    mobileWorldContent: (completedTask) ->
        console.log completedTask.data.name, completedTask.data.variation

        jsonTables = {}
        for tablePath in completedTask.result
            [tableName, ...] = path.basename(tablePath).split('.')
            jsonTables[tableName] = tablePath

        console.log ''
        utils.snsPublish {
            task: 'processItems'
            data:
                db: completedTask.data
                tables: jsonTables
        }
