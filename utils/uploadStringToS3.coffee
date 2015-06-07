fs      = require 'fs'
zlib    = require 'zlib'
AWS     = require 'aws-sdk'
Promise = require 'bluebird'
_       = require 'lodash'

config = require '../config'
s3     = new AWS.S3({region: config.awsRegion})

module.exports = ({key, data, contentType, gzip}) -> new Promise (resolve, reject) ->

    unless _.isString data
        data = JSON.stringify data
        contentType = undefined # use the default value down below

    uploadedTo = "s3:#{config.awsRegion}:#{config.s3Bucket}/#{key}"

    params = {
        Bucket: config.s3Bucket
        Key: key
        ContentType: contentType or 'application/json;charset=utf-8'
        Body: data
        ACL: 'public-read'
    }

    _doTheUpload = ->
        if process.env.DRY_RUN
            fs.writeFile './working/s3DryRun/' + params.Key, params.Body, (err) ->
                if err
                    return reject err

                console.log 'Dry Run uploaded to', uploadedTo
                resolve params.Key
            return

        s3.putObject params, (err) ->
            reject(err) if err

            console.log 'Successfully uploaded to ' + uploadedTo
            resolve key

    if gzip
        console.log 'Gzipping', params.Key
        zlib.gzip params.Body, (err, result) ->
            params.Body = result
            params.ContentEncoding = 'gzip'
            _doTheUpload()

