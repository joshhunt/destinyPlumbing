_       = require 'lodash'
fs      = require 'fs'
AWS     = require 'aws-sdk'
utils = require './utils'
config  = require './config'
s3      = new AWS.S3({region: config.awsRegion})

writeJson = (filename, data, msg) ->
    fs.writeFile filename, JSON.stringify(data, null, 2), (err) ->
        throw(err) if err
        console.log(msg) if msg

s3Bucket = config.s3Bucket
allKeys = []

listAllKeys = (marker, cb) ->
    s3.listObjects {Bucket: s3Bucket, Marker: marker}, (err, data) ->
        throw(err)  if err
        allKeys = allKeys.concat data.Contents


        if data.IsTruncated
            listAllKeys data.Contents.slice(-1)[0].Key, cb
        else
            cb allKeys

ITEM_PATH_REGEX = /(items)\/([\w-]+)\/(\w+).json/
ITEM_INDEX_REGEX = /a/

listAllKeys undefined, (keys) ->
    justPaths = []
    manifest = {}

    for file in keys
        match = file.Key.match ITEM_PATH_REGEX

        if match
            [path, cat, variation, name] = match

            if not manifest[cat]
                manifest[cat] = {}

            if not manifest[cat][variation]
                manifest[cat][variation] = {}

            manifest[cat][variation][name] = "http://destiny.plumbing/" + path

    writeJson './working/allfiles.json', keys
    writeJson './working/allfilesJustPaths.json', justPaths
    writeJson './working/index.json', manifest

    utils.uploadStringToS3 {
        key: 'index.json'
        data: manifest
        gzip: true
    }