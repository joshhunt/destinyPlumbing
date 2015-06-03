utils   = require '../../utils'
Promise = require 'bluebird'

module.exports = ({db, name, variation}) ->
    # TODO, process:
    #  - DestinyActivityBundleDefinition
    #  - DestinyGrimoireDefinition
    #  - DestinyVendorDefinition

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
        promises.push processTable {db, tableName, idField, variation}

    Promise.all promises


processTable = ({db, tableName, idField, variation}) ->

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
            utils.uploadStringToS3 {
                key: "raw/mobileWorldContent/#{variation}/#{tableName}.json"
                data: JSON.stringify(data)
            }



runQuery = (db, tableName) -> new Promise (resolve, reject) ->

    db.all "select * from #{tableName}", (err, rows) ->
        return reject(err) if err
        resolve rows
