const fs = require('fs');
const pathLib = require('path');

const { mapLimitPromise } = require('./utils');
const fileManager = require('./fileManager');

const PATH_PREFIX = process.env.PATH_PREFIX;

const RAW_DIR = PATH_PREFIX ? pathLib.join('./data', PATH_PREFIX) : './data';

const LANGUAGE_CONCURRENCY = 4;

const VALID_LANGS = [
  'en',
  'fr',
  'es',
  'de',
  'it',
  'ja',
  'pt-br',
  'es-mx',
  'ru',
  'pl',
  'zh-cht',
];

module.exports = function furtherProcessDumps() {
  console.log('\n## Running additional processing tasks');

  const langs = fs
    .readdirSync(RAW_DIR)
    .filter(f => !f.includes('.json'))
    .filter(lang => VALID_LANGS.includes(lang));

  return mapLimitPromise(langs, LANGUAGE_CONCURRENCY, lang => {
    console.log('## Processing', lang, 'further');
    const pathPrefex = `${RAW_DIR}/${lang}`;

    const tasks = [
      // 'armorPerkTypes',
      // 'reducedCollectableInventoryItems',
      // 'reducedActivities',
      'diff',
    ];

    // Run each of the tasks sync
    return tasks.reduce((promise, taskName) => {
      return promise.then(() => {
        console.log('* Running task', taskName);
        const taskPromise = require(`./tasks/${taskName}`)(pathPrefex, lang);

        taskPromise.catch(err => {
          console.error('Error with task', taskName);
          console.error(err);
        });

        return taskPromise;
      });
    }, Promise.resolve());
  });
};

// Run this module if called directly with node furtherProcessDumps
if (!module.parent) {
  module
    .exports()
    .then(() => {
      console.log('done apparently');
      console.log(fileManager.collectManifest());
    })
    .catch(err => {
      console.log('Error');
      console.log(err);
    });
}
