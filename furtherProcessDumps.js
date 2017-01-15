const fs = require('fs');

const { mapLimitPromise } = require('./utils');
const fileManager = require('./fileManager');

const RAW_DIR = './data';
const LANGUAGE_CONCURRENCY = 4;

module.exports = function furtherProcessDumps() {
  console.log('\n## Running additional processing tasks');

  const langs = fs.readdirSync(RAW_DIR).filter(f => !f.includes('.json'));

  return mapLimitPromise(langs, LANGUAGE_CONCURRENCY, (lang) => {
    console.log('## Processing', lang, 'further');
    const pathPrefex = `${RAW_DIR}/${lang}`;

    const tasks = [
      // 'createItemDumps',
      // 'strikeDrops',
      'raidDrops',
    ];

    // Run each of the tasks async
    return tasks.reduce((promise, taskName) => {
      return promise
        .then(() => {
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
  module.exports()
  .then(() => {
    console.log('done apparently');
    console.log(fileManager.collectManifest());
  })
  .catch((err) => {
    console.log('Error');
    console.log(err);
  });
}
