// This is the entry point to run on a schedule.
const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny2/Manifest/';
const API_KEY = 'b661376f5d52484ea8a2f7d73407b96b';

const fs = require('fs');
const axios = require('axios');

const { notify } = require('./utils');
const downloadAndProcess = require('./downloadAndProcess');

const LAST_RUN_FILE = './lastrun.txt';

const lastRun = fs.readFileSync(LAST_RUN_FILE).toString();
console.log('Prev ID:', lastRun);

let didRun = false;

axios
  .get(MANIFEST_URL, {
    headers: { 'X-API-Key': API_KEY },
  })
  .then(resp => {
    const id = `${resp.data.Response.version}|${resp.data.Response
      .mobileWorldContentPaths.en}`;
    console.log('This ID:', id);

    if (id !== lastRun) {
      notify(
        'destiny.plumbing is updating in response to a change in the manifest.'
      );
      didRun = true;
      fs.writeFileSync(LAST_RUN_FILE, id);
      return downloadAndProcess();
    }

    return Promise.resolve();
  })
  .then(() => {
    if (didRun) {
      notify('destiny.plumbing finished');
    }
  })
  .catch(err => {
    console.log('err');
    console.log(err);
    notify(`destiny.plumbing quit with an error ${err.message}`);
  });

process.on('unhandledRejection', reason => {
  console.log(reason);
});
