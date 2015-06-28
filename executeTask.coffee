request = require 'request-promise'
Promise = require 'bluebird'
config = require './config'
utils = require './utils'
path = require 'path'
fs = require 'fs'

BUNGIE = 'http://www.bungie.net'

module.exports = ({url, variation, name}) -> new Promise (resolve, reject) ->
    printName = "#{name} #{variation}"

    console.log 'Downloading', printName

    try
        dbHandler = require "./resources/dbHandlers/#{name}"
    catch e
        return reject "No DB handler for #{name}"

    utils.downloadFile url
        .then utils.unzipFile
        .then utils.openDatabase
        .then (db) ->
            console.log 'Running DB handler on', printName
            dbHandler {db, variation, name}
        .then resolve
        .catch reject