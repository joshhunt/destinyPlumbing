// This is the entry point to run on a schedule.
const { MANIFEST_URL, API_KEY } = require('./config.json');

const fs = require('fs');
const axios = require('axios');

const { notify, generateManifestID } = require('./utils');
const downloadAndProcess = require('./downloadAndProcess');

const LAST_RUN_FILE = './lastrun.txt';

const lastRun = fs.readFileSync(LAST_RUN_FILE).toString();
console.log('Prev ID:', lastRun);

let didRun = false;
let thisId;

console.log('------------------------------');
console.log(`Starting at ${new Date().toISOString()}`);

axios
  .get(MANIFEST_URL, {
    headers: { 'X-API-Key': API_KEY },
  })
  .then(resp => {
    thisId = generateManifestID(resp.data.Response);
    console.log('This ID:', thisId);

    if (thisId == lastRun) {
      return Promise.resolve();
    }

    notify(
      'destiny.plumbing is updating in response to a change in the manifest.'
    );
    didRun = true;
    return downloadAndProcess();
  })
  .then(() => {
    if (didRun) {
      notify('destiny.plumbing finished');
      fs.writeFileSync(LAST_RUN_FILE, thisId);
    } else {
      console.log('No change in ID.');
    }

    console.log(`Finished at ${new Date().toISOString()}`);
  })
  .catch(err => {
    console.log('err');
    console.log(err);
    notify(`destiny.plumbing quit with an error ${err.message}`);
    console.log(`Finished with error at ${new Date().toISOString()}`);
  });

process.on('unhandledRejection', reason => {
  console.log(reason);
});
