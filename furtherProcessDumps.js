const fs = require('fs');

const { mapLimitPromise } = require('./utils');

const RAW_DIR = './data';
const LANGUAGE_CONCURRENCY = 1;

module.exports = function furtherProcessDumps() {
  console.log('\n## Running additional processing tasks');

  const langs = fs.readdirSync(RAW_DIR).filter(f => !f.includes('.json'));

  return mapLimitPromise(langs, LANGUAGE_CONCURRENCY, (lang) => {
    console.log('\n## Processing', lang, 'further');
    const pathPrefex = `${RAW_DIR}/${lang}`;

    return Promise.resolve() // just a stylistic preference to get all tasks in line
      .then(() => require('./tasks/createItemDumps')(pathPrefex, lang))
      .then(() => require('./tasks/strikeDrops')(pathPrefex, lang));
  });
};


// Run this module if called directly with node furtherProcessDumps
if (!module.parent) {
  module.exports()
  .then(() => console.log('done apparently'))
  .catch((err) => {
    console.log('Error');
    console.log(err);
  });
}
