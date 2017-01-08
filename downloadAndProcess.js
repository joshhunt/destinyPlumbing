require('isomorphic-fetch');

const axios = require('axios');
const async = require('async');

const { downloadToFile, unzipFile, changeExt, resolveCb, alsoResolveWith, mapPromiseAll } = require('./utils');
const processDatabase = require('./dumpMobileWorldContent');
const furtherProcessDumps = require('./furtherProcessDumps');
const fileManager = require('./fileManager');

const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny/Manifest/';
const API_KEY = '07ccdc0787034cabb78110651e94ccfc';

function getSqlFile(dumpPath, dumpLang) {
  const dumpUrl = `https://www.bungie.net${dumpPath}`;

  return downloadToFile(changeExt(dumpPath, 'zip'), dumpUrl, dumpLang)
    .then(zipFile => unzipFile('', zipFile));
}

function mapLimit(items, limit, func) {
  return new Promise((resolve, reject) => {
    async.mapLimit(items, limit, func, resolveCb(resolve, reject));
  });
}

let BUNGIE_MANIFEST;

module.exports = () => {
  return axios.get(MANIFEST_URL, {
    headers: { 'X-API-Key': API_KEY },
  })
  .then((resp) => {
    // const languages = {
    //   en: resp.data.Response.mobileWorldContentPaths.en,
    // };
    const languages = resp.data.Response.mobileWorldContentPaths;

    BUNGIE_MANIFEST = resp.data.Response;

    return mapPromiseAll(languages, (dumpPath, dumpLang) => {
      console.log('Downloading language', dumpLang);

      // Download and extract the sqlite database
      return alsoResolveWith(
        getSqlFile(dumpPath, dumpLang),
        dumpLang);
    });
  })
  .then((results) => {
    return mapLimit(results, 1, ([sqlFile, lang], cb) => {
      console.log('Dumping', lang);

      return processDatabase(sqlFile, lang)
        .then(r => cb(null, r))
        .catch(cb);
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
    return fileManager.saveManifest({
      bungieManifestVersion: BUNGIE_MANIFEST.version,
    });
  });
};
