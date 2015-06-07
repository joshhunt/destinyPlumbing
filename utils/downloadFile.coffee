fs = require 'fs'
http = require 'http'
path = require 'path'
_ = require 'lodash'

Promise = require 'bluebird'
rimraf = require 'rimraf'

module.exports = (url, filename, returnCached) ->
    args = arguments
    new Promise (resolve, reject) ->
        if _.isObject args[0]
            {url, filename, returnCached} = args[0]

        filename ?= path.basename url
        returnCached ?= true

        destPath = '/tmp/' + filename

        fs.stat destPath, (err, stat) ->
            if err?.code isnt 'ENOENT' and returnCached
                console.log 'Returning cached version of', destPath, 'early'
                return resolve destPath

            rimraf destPath, ->
                console.log 'Downloading', destPath
                destStream = fs.createWriteStream destPath

                http.get url, (resp) ->
                    resp.pipe destStream

                    resp.on 'end', ->
                        destStream.close()
                        resolve destPath