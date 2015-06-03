Promise = require 'bluebird'
config = require '../config'
AWS    = require 'aws-sdk'
sns    = new AWS.SNS {region: config.awsRegion}

module.exports = (payload = {}) -> new Promise (resolve, reject) ->

    params =
        Message: JSON.stringify payload
        TopicArn: config.snsTopic

    sns.publish params, (err, data) ->
        if err
            return reject err

        resolve data