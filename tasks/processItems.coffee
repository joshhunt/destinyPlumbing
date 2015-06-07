fs = require 'fs'
_ = require 'lodash'
utils = require '../utils'
Promise = require 'bluebird'
defs = require '../resources/definitions'

BUNGIE_URL = 'http://bungie.net'

writeJson = (filename, data, msg) ->
    fs.writeFile filename, JSON.stringify(data, null, 2), (err) ->
        throw(err) if err
        console.log(msg) if msg


module.exports = (taskName, taskData) -> new Promise (resolve, reject) ->
    console.log 'Processing items'

    requiredFiles = _.pick taskData.tables, ['DestinyInventoryItemDefinition', 'DestinyInventoryBucketDefinition', 'DestinyTalentGridDefinition']

    console.log 'Downloading required files:'
    console.log requiredFiles

    utils.downloadS3Object requiredFiles
        .then readBuffersToJson
        .then (tables) -> {tables, taskData}
        .then processItems

readBuffersToJson = (buffersObj) ->
    stringObj = {}
    for key, buf of buffersObj
        stringObj[key] = JSON.parse(buf.toString())
    return stringObj

processItems = ({tables, taskData}) ->
    console.log '\n\ncool, finally processing items.'

    variation = taskData.db.variation
    itemDefinition = tables.DestinyInventoryItemDefinition
    extraData =
        bucketDefinition: tables.DestinyInventoryBucketDefinition
        talentGridDefinition: tables.DestinyTalentGridDefinition

    itemsByType = {}
    allItems = {}
    uploadPromises = []

    for itemHash, item of itemDefinition
        itemType = defs.itemType[item.itemType]
        if itemsByType[itemType]
            itemsByType[itemType].push item
        else
            itemsByType[itemType] = [item]

    _.each itemsByType, (items, itemType) ->
        allItemsForType = {}
        itemHandler = itemHandlers[itemType] or itemHandlers._fallback

        _.each items, (rawItem) ->
            item = itemHandlers._generic rawItem, extraData
            item = itemHandler rawItem, item, extraData
            allItemsForType[item.hash] = item
            allItems[item.hash] = item

        uploadPromises.push utils.uploadStringToS3 {
            key: "items/#{variation}/#{itemType}.json"
            data: {items: allItemsForType}
            gzip: true
        }

    uploadPromises.push utils.uploadStringToS3 {
        key: "items/#{variation}.json"
        data: {items: allItems}
        gzip: true
    }

    Promise.all uploadPromises

getWeaponDamageTypes = (talentGrid) ->
    possible = []
    certain = []
    if talentGrid?.nodes?
        for node in talentGrid.nodes
            for step in node.steps
                if step.damageType isnt 0
                    if node.isRandom
                        possible.push step.nodeStepName
                    else
                        certain.push step.nodeStepName

    {possible, certain}

# Recives one item and adds or changes additional fields as needed
itemHandlers =
    # _generic is ran on every item BEFORE the defined itemHandler for the itemType
    _generic: (rawItem, {bucketDefinition}) ->
        hash: rawItem.itemHash
        name: rawItem.itemName
        description: rawItem.itemDescription
        icon: BUNGIE_URL + rawItem.icon
        tier: rawItem.tierTypeName
        type: defs.itemType[rawItem.itemType]
        subType: rawItem.itemTypeName
        bucket: bucketDefinition[rawItem.bucketTypeHash].bucketIdentifier
        maxStackSize: rawItem.maxStackSize

    # _fallback is ran if there is no defined itemHandler for the itemType
    _fallback: (rawItem, cleanItem) -> return cleanItem

    Weapon: (rawItem, cleanItem, extraData) ->
        {bucketDefinition, talentGridDefinition} = extraData

        talentGrid = talentGridDefinition[rawItem.talentGridHash]
        damageTypes = getWeaponDamageTypes talentGrid
        cleanItem.damageTypeRolls = damageTypes.possible
        cleanItem.damageType = damageTypes.certain
        cleanItem.maxStackSize = undefined

        return cleanItem

    Armor: (rawItem, cleanItem, extraData) ->
        cleanItem.class = defs.classType[rawItem.classType]
        cleanItem.maxStackSize = undefined
        return cleanItem