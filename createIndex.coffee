_       = require 'lodash'
fs      = require 'fs'
pathLib = require 'path'
AWS     = require 'aws-sdk'
utils   = require './utils'
config  = require './config'
s3      = new AWS.S3({region: config.awsRegion})

writeJson = (filename, data, msg) ->
    fs.writeFile filename, JSON.stringify(data, null, 2), (err) ->
        throw(err) if err
        console.log(msg) if msg

listAllKeys = (marker, cb, accumulator) ->
    if not accumulator
        accumulator = []

    s3.listObjects {Bucket: config.s3Bucket, Marker: marker}, (err, data) ->
        throw(err)  if err
        accumulator = accumulator.concat data.Contents

        if data.IsTruncated
            listAllKeys data.Contents.slice(-1)[0].Key, cb, accumulator
        else
            cb accumulator

setItemNested = (obj, keys, value) ->
    [path..., finalKey] = keys

    for v in path
        if not obj[v]
            obj[v] = {}
        obj = obj[v]

    obj[finalKey] = value


ITEM_PATH_REGEX = /(items)\/([\w-]+)\/(\w+).json/
ITEM_INDEX_REGEX = /(items)\/([\w-]+).json/
RAW_PATH_REGEX = /^raw\//


listAllKeys undefined, (keys) ->
    justPaths = []
    manifest = {}

    _.each keys, (s3Obj) ->
        s3Key = s3Obj.Key
        justPaths.push s3Key

        match = s3Key.match ITEM_PATH_REGEX
        if match
            [path, cat, variation, name] = match
            url = "http://destiny.plumbing/" + path
            setItemNested manifest, [cat, variation, name], url
            return

        match = s3Key.match ITEM_INDEX_REGEX
        if match
            [path, cat, variation] = match
            url = "http://destiny.plumbing/" + path
            name = 'all'
            setItemNested manifest, [cat, variation, name], url
            return

        if s3Key.match RAW_PATH_REGEX
            parsedPath = pathLib.parse s3Key
            pathArr = parsedPath.dir.split '/'
            pathArr.push parsedPath.name
            setItemNested manifest, pathArr, "http://destiny.plumbing/" + s3Key
            console.log parsedPath


    writeJson './working/allfiles.json', keys
    writeJson './working/allfilesJustPaths.json', justPaths
    writeJson './working/index.json', manifest
    # console.log manifest

    utils.uploadStringToS3 {
        key: 'index.json'
        data: JSON.stringify(manifest, null, 2)
        gzip: true
    }