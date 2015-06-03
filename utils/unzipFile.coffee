fs    = require 'fs'
unzip = require 'unzip'
Promise = require 'bluebird'

module.exports = (zipPath) -> new Promise (resolve, reject) ->
    wroteFile = false
    destStream = null

    fs.createReadStream zipPath
        .pipe unzip.Parse()
        .on 'entry', (entry) ->
            if wroteFile
                entry.autodrain()
                return

            wroteFile = true
            destPath = entry.path.replace /^(.+)\.\w+$/, '/tmp/$1.sql'
            destStream = fs.createWriteStream destPath

            entry.pipe destStream
            destStream.on 'close', ->
                resolve destPath