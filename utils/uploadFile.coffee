fs      = require 'fs'
AWS     = require 'aws-sdk'
Promise = require 'bluebird'

config = require '../config'
s3     = new AWS.S3({region: config.awsRegion})

module.exports = (filePath, key) -> new Promise (resolve, reject) ->

    fs.readFile filePath, (err, data) ->
        throw(err) if err
        key ?= path.basename filePath

        params =
            Bucket: config.s3Bucket
            Key: key
            Body: data
            ACL: 'public-read'


        s3.putObject params, (err, resp) ->
            resolve params.Key