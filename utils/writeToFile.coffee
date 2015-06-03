fs = require 'fs'
Promise = require 'bluebird'

module.exports = (data, filePath) -> new Promise (resolve, reject) ->
    if typeof data isnt 'string'
        data = JSON.stringify data

    fs.writeFile filePath, data, (err) ->
        return reject(err) if err
        resolve()