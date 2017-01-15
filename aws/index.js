/* eslint-disable prefer-arrow-callback */
const AWS = require('aws-sdk');
const axios = require('axios');

const s3 = new AWS.S3();

const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny/Manifest/';
const API_KEY = '07ccdc0787034cabb78110651e94ccfc';

function getS3Item(key) {
  return new Promise((resolve, reject) => {
    const getParams = {
      Bucket: process.env.S3_BUCKET,
      Key: key,
    };

    s3.getObject(getParams, function gotS3Item(err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result.Body.toString());
    });
  });
}

function getDestinyPlumbingVersion() {
  return getS3Item('index.json')
    .then(manifest => manifest.version);
}

function getBungieManifestVersion() {
  return axios.get(MANIFEST_URL, {
    headers: { 'X-API-Key': API_KEY },
  }).then(({ data }) => {
    return `${data.Response.version}|${data.Response.mobileWorldContentPaths.en}`;
  });
}

function createEc2InstanceForProcessing() {
  console.log('createEc2InstanceForProcessing');
  return Promise.resolve();
}

exports.handler = function mainHandler(event, context, cb) {
  const promises = [
    getDestinyPlumbingVersion(),
    getBungieManifestVersion(),
  ];

  Promise.all(promises)
    .then(([ourVersion, theirVersion]) => {
      if (ourVersion !== theirVersion) {
        return createEc2InstanceForProcessing();
      }

      console.log('ourVersion:', ourVersion);
      console.log('theirVersion:', theirVersion);

      return Promise.resolve();
    })
    .then(() => cb())
    .catch(err => {
      console.log('fuck error');
      console.log(err);
      cb(err);
    });
};
