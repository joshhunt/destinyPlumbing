AWS     = require 'aws-sdk'
Promise = require 'bluebird'

config = require '../config'
s3     = new AWS.S3({region: config.awsRegion})

module.exports = ({key, data, contentType}) -> new Promise (resolve, reject) ->
    # _running[key] = true
    s3.putObject {
        Bucket: config.s3Bucket
        Key: key
        ContentType: contentType or 'application/json;charset=utf-8'
        Body: data
        ACL: 'public-read'
    }, (err) ->
        # _running[key] = false
        reject(err) if err
        uploadedTo = "s3:#{config.awsRegion}:#{config.s3Bucket}/#{key}"

        console.log 'Successfully uploaded to ' + uploadedTo
        resolve uploadedTo