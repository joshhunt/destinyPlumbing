const sqlite3 = require('sqlite3').verbose();
const _ = require('lodash');

const fileManager = require('./fileManager');
const { resolveCb, mapLimitPromise } = require('./utils');

const TABLES_LIMIT = 1;

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
  console.log('Processing ' + tableName);
  return queryDb(db, `select * from ${tableName}`)
    .then((rows) => {
      const items = rows.reduce((acc, row, index) => {
        const rowData = JSON.parse(row.json);
        let rowID;

        // TODO: DestinyGrimoireDefinition doesnt get sensisble IDs
        if (_.has(row, 'id')) {
          // convert from signed-32bit-as-Number to unsigned-32bit-as-Number
          rowID = row.id >>> 0; // eslint-disable-line
        } else if (_.has(row, 'key')) {
          rowID = row.key;
        } else {
          die(row, `[${tableName}] item index ${index} does not have an .id or .key, but it does have ${Object.keys(row)}`);
        }

        if (!rowID && rowID !== 0) {
          die(row, `[${tableName}] item ${row.id} (index ${index}) does not have a sensible ID`);
        }

        if (acc[rowID]) {
          die(row, `[${tableName}] item ${row.id} (index ${index}) appears to be duplicated`);
        }

        return Object.assign({ [rowID]: rowData }, acc);
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
    .then((db) => {
      console.log('Querying for all tables');
      return Promise.all([
        db,
        queryDb(db, 'SELECT name FROM sqlite_master WHERE type=\'table\';'),
      ]);
    })
    .then(([db, rows]) => {
      // rows = [
      //   { name: 'DestinyActivityDefinition' },
      //   // { name: 'DestinyActivityTypeDefinition' },
      //   { name: 'DestinyClassDefinition' },
      //   // { name: 'DestinyGenderDefinition' },
      //   { name: 'DestinyInventoryBucketDefinition' },
      //   { name: 'DestinyInventoryItemDefinition' },
      //   // { name: 'DestinyProgressionDefinition' },
      //   // { name: 'DestinyRaceDefinition' },
      //   // { name: 'DestinyTalentGridDefinition' },
      //   // { name: 'DestinyUnlockFlagDefinition' },
      //   // { name: 'DestinyVendorDefinition' },
      //   // { name: 'DestinyHistoricalStatsDefinition' },
      //   // { name: 'DestinyDirectorBookDefinition' },
      //   // { name: 'DestinyStatDefinition' },
      //   // { name: 'DestinySandboxPerkDefinition' },
      //   // { name: 'DestinyDestinationDefinition' },
      //   // { name: 'DestinyPlaceDefinition' },
      //   // { name: 'DestinyActivityBundleDefinition' },
      //   // { name: 'DestinyStatGroupDefinition' },
      //   // { name: 'DestinySpecialEventDefinition' },
      //   { name: 'DestinyFactionDefinition' },
      //   // { name: 'DestinyVendorCategoryDefinition' },
      //   // { name: 'DestinyEnemyRaceDefinition' },
      //   // { name: 'DestinyScriptedSkullDefinition' },
      //   // { name: 'DestinyTriumphSetDefinition' },
      //   // { name: 'DestinyItemCategoryDefinition' },
      //   // { name: 'DestinyRewardSourceDefinition' },
      //   // { name: 'DestinyObjectiveDefinition' },
      //   // { name: 'DestinyDamageTypeDefinition' },
      //   // { name: 'DestinyCombatantDefinition' },
      //   // { name: 'DestinyActivityCategoryDefinition' },
      //   // { name: 'DestinyRecordDefinition' },
      //   // { name: 'DestinyRecordBookDefinition' },
      //   // { name: 'DestinyActivityModeDefinition' },
      //   // { name: 'DestinyMedalTierDefinition' },
      //   // { name: 'DestinyBondDefinition' },
      //   // { name: 'DestinyLocationDefinition' },
      //   // { name: 'DestinyGrimoireDefinition' },
      //   // { name: 'DestinyGrimoireCardDefinition' },
      // ];

      console.log(`Found ${rows.length} tables. Extracting all the items`);

      return mapLimitPromise(rows, TABLES_LIMIT, ({ name }) => {
        return processTable(db, name, lang)
          .then(saveTable);
      });
    });
    // .then(everything => saveAll(everything, lang));
};
