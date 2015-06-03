fs = require 'fs'
Promise = require 'bluebird'

module.exports = (filePath) -> new Promise (resolve, reject) ->
    fs.readFile filePath, (err, buffer) ->
        reject(err) if err
        resolve buffer