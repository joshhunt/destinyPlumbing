utils   = require '../../utils'
Promise = require 'bluebird'
_ = require 'lodash'

uploadPromiseStore = {}

module.exports = ({db, name, variation}) ->
    uploadPromiseStore[name + variation] = []
    newResults = []

    processDatabase {db, name, variation}
        .then (allTables) ->
            store = {}

            for table in allTables
                store[table.table] = table.data

            return store
        .then (allData) ->
            processItems allData, {name, variation}
        .then (results) ->
            for promise in results
                if promise.isFulfilled()
                    newResults.push {
                        state: 'success'
                        data: promise.value()
                    }
                else
                    err = promise.reason()
                    err = err.stack or err
                    newResults.push {
                        state: 'fail'
                        data: err
                    }

            return newResults
        .then ->
            Promise.all uploadPromiseStore[name + variation]
        .then ->
            return newResults


processDatabase = ({db, name, variation}) ->
    tables = {
        'DestinyActivityDefinition':        'activityHash'
        'DestinyActivityTypeDefinition':    'activityTypeHash'
        'DestinyClassDefinition':           'classHash'
        'DestinyDestinationDefinition':     'destinationHash'
        'DestinyDirectorBookDefinition':    'bookHash'
        'DestinyFactionDefinition':         'factionHash'
        'DestinyGenderDefinition':          'genderHash'
        'DestinyGrimoireCardDefinition':    'cardId'
        'DestinyHistoricalStatsDefinition': 'statId'
        'DestinyInventoryBucketDefinition': 'bucketHash'
        'DestinyInventoryItemDefinition':   'itemHash'
        'DestinyPlaceDefinition':           'placeHash'
        'DestinyProgressionDefinition':     'progressionHash'
        'DestinyRaceDefinition':            'raceHash'
        'DestinySandboxPerkDefinition':     'perkHash'
        'DestinySpecialEventDefinition':    'eventHash'
        'DestinyStatDefinition':            'statHash'
        'DestinyStatGroupDefinition':       'statGroupHash'
        'DestinyTalentGridDefinition':      'gridHash'
        'DestinyUnlockFlagDefinition':      'flagHash'
        'DestinyVendorCategoryDefinition':  'categoryHash'
    }

    promises = []

    for tableName, idField of tables
        promises.push processTable {db, dbName: name, tableName, idField, variation}

    Promise.all promises


processTable = ({db, tableName, dbName, idField, variation}) ->

    extractData = (allRows) ->
        allData = {}

        for row in allRows
            data = JSON.parse row.json
            id = data[idField]
            allData[id] = data

        return allData

    runQuery db, tableName
        .then extractData
        .then (data) -> return {data, tableName}
        .then ({data}) ->

            # We don't want to wait for these to complete, yet
            ourPromiseStore = uploadPromiseStore[dbName + variation]
            ourPromiseStore.push utils.uploadStringToS3 {
                key: "raw/mobileWorldContent/#{variation}/#{tableName}.json"
                data: JSON.stringify(data)
                gzip: true
            }

            return {
                table: tableName
                variation: variation
                data: data
            }



runQuery = (db, tableName) -> new Promise (resolve, reject) ->

    db.all "select * from #{tableName}", (err, rows) ->
        return reject(err) if err
        resolve rows


processItems = (allData, options) ->

    _processSingleItemsTable = (tableName, tableData) -> new Promise (resolve, reject) ->
        try
            handler = require "../worldContentHandlers/#{tableName}"
        catch e
            return reject "worldContentHandler for #{tableName} not found"

        tables = _.pick allData, handler.dependencies, tableName
        console.log 'Tables:'
        console.log Object.keys tables

        handler.func tables, options
            .then resolve
            .catch reject

    promises = []
    for tableName, tableData of allData
        promises.push _processSingleItemsTable tableName, tableData

    Promise.settle promises

