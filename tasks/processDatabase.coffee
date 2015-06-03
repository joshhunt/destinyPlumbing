utils   = require '../utils'
Promise = require 'bluebird'

module.exports = (taskName, taskData) ->

    if taskData.pendingTasks.length is 0
        return Promise.resolve 'All tasks have completed'

    [task, pendingTasks...] = taskData.pendingTasks
    {name, url, variation} = taskData.data

    whitelistedDatabases = [
        'mobileWorldContent'
    ]

    if name  not in whitelistedDatabases
        return Promise.reject 'Attempted to process non-whitelisted database'

    dbHandler = require "../resources/dbHandlers/#{name}"

    utils.downloadFile dbUrl
        .then utils.unzipFile
        .then utils.openDatabase
        .then (db) ->
            dbHandler {db, variation, name}
        .then (result) ->
            masterTask =
                task: taskName
                data:
                    pendingTasks: pendingTasks
                    completedTasks: taskData.completedTasks.concat([task])
                    completedResults: taskData.completedResults.concat([result])
