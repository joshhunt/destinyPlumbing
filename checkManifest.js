// This is the entry point to run on a schedule.
const { MANIFEST_URL, API_KEY } = require('./config.json');

const fs = require('fs');
const axios = require('axios');

console.log('------------------------------');
console.log(`Starting at ${new Date().toISOString()}`);

const { notify, generateManifestID } = require('./utils');
const downloadAndProcess = require('./downloadAndProcess');

const CURRENTLY_RUNNING = 'currently running';
const LAST_RUN_FILE = './lastrun.txt';

const statusFile = fs.readFileSync(LAST_RUN_FILE).toString();

console.log('Status file contents:', statusFile);

const [lastRun, lastStatus] = statusFile.split('\n');

console.log('Prev ID:', lastRun);
console.log('lastStatus:', lastStatus);

let didRun = false;
let thisId;

if ((lastStatus || '').includes(CURRENTLY_RUNNING)) {
  console.log("It's currently running, skip!");
} else {
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

      fs.writeFileSync(LAST_RUN_FILE, `${lastRun}\n${CURRENTLY_RUNNING}`);

      notify(
        'destiny.plumbing is updating in response to a change in the manifest.',
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
}

process.on('unhandledRejection', reason => {
  console.log(reason);
});
