require('isomorphic-fetch');

const axios = require('axios');

const {
  downloadToFile,
  unzipFile,
  changeExt,
  alsoResolveWith,
  mapPromiseAll,
  mapLimitPromise,
  generateManifestID,
} = require('./utils');
const processDatabase = require('./dumpMobileWorldContent');
const furtherProcessDumps = require('./furtherProcessDumps');
const fileManager = require('./fileManager');

const { MANIFEST_URL, API_KEY } = require('./config.json');

const LANG_LIMIT = 2;

function getSqlFile(dumpPath, dumpLang) {
  const dumpUrl = `https://www.bungie.net${dumpPath}`;

  return downloadToFile(
    changeExt(dumpPath, 'zip'),
    dumpUrl,
    dumpLang
  ).then(zipFile => unzipFile('', zipFile));
}

const ITEM_URL =
  'https://destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json';
let BUNGIE_MANIFEST;

module.exports = () => {
  const promise = Promise.all([
    axios.get(MANIFEST_URL, { headers: { 'X-API-Key': API_KEY } }),
    axios.get(ITEM_URL),
  ]);

  return promise
    .then(([resp, previousItemDefs]) => {
      // const languages = {
      //   en: resp.data.Response.mobileWorldContentPaths.en,
      // };
      const languages = resp.data.Response.mobileWorldContentPaths;

      BUNGIE_MANIFEST = resp.data.Response;
      global.HACKY_MANIFEST_ID = generateManifestID(BUNGIE_MANIFEST);
      global.HACKY_PREVIOUS_ITEM_DEFS = previousItemDefs.data;

      return mapPromiseAll(languages, (dumpPath, dumpLang) => {
        console.log('Downloading language', dumpLang);

        // Download and extract the sqlite database
        return alsoResolveWith(getSqlFile(dumpPath, dumpLang), dumpLang);
      });
    })
    .then(results => {
      return mapLimitPromise(results, LANG_LIMIT, ([sqlFile, lang]) => {
        console.log('Dumping', lang);

        return processDatabase(sqlFile, lang);
      });
    })
    .then(() => {
      console.log('');
      console.log('### Further processing dumps');
      return furtherProcessDumps();
    })
    .then(() => {
      console.log('');
      console.log('### Saving manifest.');

      const id = generateManifestID(BUNGIE_MANIFEST);

      return fileManager.saveManifest({
        id,
        lastUpdated: new Date(),
        bungieManifestVersion: BUNGIE_MANIFEST.version,
      });
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
