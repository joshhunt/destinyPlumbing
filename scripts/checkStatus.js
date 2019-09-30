require('isomorphic-fetch');
const { generateManifestID } = require('./utils');

const { MANIFEST_URL, API_KEY } = require('./config.json');

const get = (...args) => fetch(...args).then(r => r.json());

const promise = Promise.all([
  get('https://s3.amazonaws.com/destiny.plumbing/index.json'),
  get(MANIFEST_URL, {
    headers: { 'X-API-Key': API_KEY },
  }),
]);

promise.then(([destinyPlumbing, bungieManifest]) => {
  const bungieID = generateManifestID(bungieManifest.Response);
  const plumbingID = destinyPlumbing.id;

  console.log('\n');
  console.log('Last updated:', new Date(destinyPlumbing.lastUpdated));
  console.log('');
  console.log('  bungieID:', bungieID);
  console.log('plumbingID:', plumbingID);
  console.log('');

  if (bungieID !== plumbingID) {
    console.log('The IDs do NOT match - destiny.plumbing is out of date');
  } else {
    console.log('The IDs match! destiny.plumbing is up to date :)');
  }
});
