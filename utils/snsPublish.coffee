Promise = require 'bluebird'
config = require '../config'
AWS    = require 'aws-sdk'
sns    = new AWS.SNS {region: config.awsRegion}
utils = require '../utils'

module.exports = (payload = {}) -> new Promise (resolve, reject) ->


    params =
        Message: JSON.stringify payload
        TopicArn: config.snsTopic

    if process.env.DRY_RUN
        console.log 'Publishing event to ARN', params.TopicArn
        console.log params.Message

        utils.writeToFile params.Message, './working/lastSnsDryRun.json'
        return Promise.resolve()

    sns.publish params, (err, data) ->
        if err
            return reject err

        resolve data