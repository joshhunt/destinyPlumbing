sqlite3 = require('sqlite3').verbose()

module.exports = (dbPath) ->
    new sqlite3.Database dbPath
