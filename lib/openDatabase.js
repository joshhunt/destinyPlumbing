import log from './log';
const sqlite3 = require('sqlite3').verbose()

export default function openDatabase(dbPath) {
    log.info(`Opening database at ${dbPath}`)
    return new sqlite3.Database(dbPath);
}
