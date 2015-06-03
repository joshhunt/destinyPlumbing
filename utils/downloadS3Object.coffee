fs      = require 'fs'
AWS     = require 'aws-sdk'
Promise = require 'bluebird'
config = require '../config'

config = require '../config'
s3     = new AWS.S3({region: config.awsRegion})

module.exports = (key, filePath) -> new Promise (resolve, reject) ->
    console.log 'Downloading S3 object', key

    params =
        Bucket: config.s3Bucket
        Key: key

    s3.getObject params, (err, resp) ->
        console.log 'done', err, resp
        return reject(err) if err
        resolve resp.Body