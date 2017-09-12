require('isomorphic-fetch');

const axios = require('axios');
const crypto = require('crypto');

const {
  downloadToFile,
  unzipFile,
  changeExt,
  alsoResolveWith,
  mapPromiseAll,
  mapLimitPromise,
} = require('./utils');
const processDatabase = require('./dumpMobileWorldContent');
const furtherProcessDumps = require('./furtherProcessDumps');
const fileManager = require('./fileManager');

const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny2/Manifest/';
const API_KEY = 'b661376f5d52484ea8a2f7d73407b96b';

const LANG_LIMIT = 2;

function getSqlFile(dumpPath, dumpLang) {
  const dumpUrl = `https://www.bungie.net${dumpPath}`;

  return downloadToFile(
    changeExt(dumpPath, 'zip'),
    dumpUrl,
    dumpLang
  ).then(zipFile => unzipFile('', zipFile));
}

let BUNGIE_MANIFEST;

module.exports = () => {
  return axios
    .get(MANIFEST_URL, {
      headers: { 'X-API-Key': API_KEY },
    })
    .then(resp => {
      const languages = {
        en: resp.data.Response.mobileWorldContentPaths.en,
      };
      // const languages = resp.data.Response.mobileWorldContentPaths;

      BUNGIE_MANIFEST = resp.data.Response;

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

      const idString = `${BUNGIE_MANIFEST.version}|${BUNGIE_MANIFEST
        .mobileWorldContentPaths.en}`;

      const id = crypto
        .createHash('md5')
        .update(idString)
        .digest('hex');

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
