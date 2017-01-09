require('isomorphic-fetch');

const axios = require('axios');

const { downloadToFile, unzipFile, changeExt, alsoResolveWith, mapPromiseAll, mapLimitPromise } = require('./utils');
const processDatabase = require('./dumpMobileWorldContent');
const furtherProcessDumps = require('./furtherProcessDumps');
const fileManager = require('./fileManager');

const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny/Manifest/';
const API_KEY = '07ccdc0787034cabb78110651e94ccfc';

const LANG_LIMIT = 2;

function getSqlFile(dumpPath, dumpLang) {
  const dumpUrl = `https://www.bungie.net${dumpPath}`;

  return downloadToFile(changeExt(dumpPath, 'zip'), dumpUrl, dumpLang)
    .then(zipFile => unzipFile('', zipFile));
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
    return fileManager.saveManifest({
      bungieManifestVersion: BUNGIE_MANIFEST.version,
    });
  });
};
