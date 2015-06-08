fs = require 'fs'
_ = require 'lodash'
utils = require '../utils'
Promise = require 'bluebird'
defs = require '../resources/definitions'

BUNGIE_URL = 'http://bungie.net'

module.exports = (taskName, taskData) -> new Promise (resolve, reject) ->
    promises = []

    promises.push utils.uploadStringToS3 {
        key: 'bungieManifest.json'
        data: JSON.stringify(taskData.bungieManifest, null, 2)
        gzip: true
    }

    uploadPromise = utils.downloadS3Object 'index.json'
        .then (index) ->
            index = JSON.parse index
            index.bungieManifestVersion = taskData.bungieManifest.version
            index.resources.bungieManifest = 'http://destiny.plumbing/bungieManifest.json'
            utils.uploadStringToS3 {
                key: 'index.json'
                data: JSON.stringify(index, null, 2)
                gzip: true
            }

    promises.push uploadPromise
    Promise.all promises
