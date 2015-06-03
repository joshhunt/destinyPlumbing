fs = require 'fs'
http = require 'http'
path = require 'path'

Promise = require 'bluebird'
rimraf = require 'rimraf'

module.exports = (url, filename) -> new Promise (resolve, reject) ->
    filename ?= path.basename url

    destPath = '/tmp/' + filename
    rimraf destPath, ->
        destStream = fs.createWriteStream destPath

        http.get url, (resp) ->
            resp.pipe destStream

            resp.on 'end', ->
                destStream.close()
                resolve destPath
