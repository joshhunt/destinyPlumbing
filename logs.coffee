_       = require 'lodash'
fs      = require 'fs'
Promise = require 'bluebird'
AWS     = require 'aws-sdk'
mkdirp  = require 'mkdirp'
utils   = require './utils'
config  = require './config'
cloudwatchlogs      = new AWS.CloudWatchLogs({region: config.awsRegion})


promiseCb = (resolve, reject) -> (err, data) ->
    return reject(err) if err
    resolve data

getLogGroups = -> new Promise (resolve, reject) ->
    cloudwatchlogs.describeLogGroups {}, promiseCb(resolve, reject)

getLogStream = (logGroupName) -> new Promise (resolve, reject) ->
    params =
      logGroupName: logGroupName
      descending: true,
      orderBy: 'LastEventTime'

    cloudwatchlogs.describeLogStreams params, promiseCb(resolve, reject)

getLogEvents = (params, accumulator, nextToken, _resolve, _reject) -> new Promise (resolve, reject) ->
    accumulator ?= []
    _reject     ?= reject
    _resolve    ?= resolve
    if nextToken
        params.nextToken = nextToken

    cloudwatchlogs.getLogEvents params, (err, data) ->
        return _reject(err) if err
        accumulator = accumulator.concat data.events

        # if data.nextForwardToken and (data.nextForwardToken isnt nextToken)
        #     getLogEvents params, accumulator, data.nextForwardToken, _resolve, _reject
        # else
        _resolve accumulator




getLogGroups().then ({logGroups}) ->
    console.log logGroups
    console.log ''

    _.each logGroups, (group) ->
        getLogStream group.logGroupName
            .then ({logStreams}) ->
                [logStreams..., largestStream] = _.sortBy logStreams, 'storedBytes'
                console.log 'logGroupName', group.logGroupName
                console.log 'logStreamName', largestStream.logStreamName


                _.each logStreams, (stream) ->
                    params =
                        logGroupName: group.logGroupName
                        logStreamName: stream.logStreamName
                        startFromHead: true

                    LOG_PREFIX_REGEX = /^([\d\-TZ:\.]+)\s([\w\-]+\s)/

                    getLogEvents params
                        .then (events) ->
                            events = _.sortBy events, 'timestamp'


                            logs = _.reduce events, (total, event) ->
                                if _.isObject total
                                    total = total.message

                                message = event.message
                                # message = message.replace LOG_PREFIX_REGEX, ''
                                return total + message

                            dir = params.logGroupName.replace /\//g, '-'
                            dir = './working/logs/' + dir
                            filename = params.logStreamName.replace /\//g, '-'
                            path = dir + '/' + filename

                            mkdirp dir, ->
                                console.log 'Saving', path
                                utils.writeToFile logs, path
