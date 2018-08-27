const sqlite3 = require('sqlite3').verbose();
const _ = require('lodash');

const fileManager = require('./fileManager');
const { resolveCb, mapPromiseAll } = require('./utils');

const TABLES_LIMIT = 4;

function die(row, msg) {
  console.log('-----');
  console.log(row);
  console.log('-----');
  throw new Error(msg);
}

function openDb(filePath) {
  return Promise.resolve(new sqlite3.Database(filePath));
}

function queryDb(db, ...queryArgs) {
  return new Promise((resolve, reject) => {
    db.all(...queryArgs, resolveCb(resolve, reject));
  });
}

function processTable(db, tableName, lang) {
  console.log('Processing', tableName);

  return queryDb(db, `select * from ${tableName}`).then(rows => {
    const items = rows.reduce((acc, row, index) => {
      const obj = JSON.parse(row.json);
      const baseKey = row.id || row.key;
      const intKey = parseInt(baseKey);
      const key = isNaN(intKey) ? baseKey : intKey >>> 0;

      acc[obj.hash || key] = obj;

      return acc;
    }, {});

    return { tableName, items, lang };
  });
}

function saveTable({ tableName, items, lang }) {
  return fileManager.saveFile([lang, 'raw', `${tableName}.json`], items);
}

module.exports = function processDatabase(filePath, lang) {
  console.log('Opening database', filePath);

  return openDb(filePath)
    .then(db => {
      console.log('Querying for all tables');
      return Promise.all([
        db,
        queryDb(db, "SELECT name FROM sqlite_master WHERE type='table';"),
      ]);
    })
    .then(([db, rows]) => {
      console.log(`Found ${rows.length} tables. Extracting all the items`);

      return mapPromiseAll(rows, ({ name }) => {
        return processTable(db, name, lang).then(saveTable);
      });
    });
  // .then(everything => saveAll(everything, lang));
};
