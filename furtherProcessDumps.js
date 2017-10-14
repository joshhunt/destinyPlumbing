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
      // This must be first because others below will depend on it.
      'createItemDumps',
      // 'strikeDrops',
      // 'raidDrops',
      'diff',
    ];

    // Run each of the tasks sync
    return tasks.reduce((promise, taskName) => {
      return promise.then(() => {
        console.log('* Running task', taskName);
        return require(`./tasks/${taskName}`)(pathPrefex, lang);
      });
    }, Promise.resolve());

    // return Promise.resolve() // just a stylistic preference to get all tasks in line
    //   .then(() => require('./tasks/createItemDumps')(pathPrefex, lang))
    //   .then(() => require('./tasks/strikeDrops')(pathPrefex, lang));
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
