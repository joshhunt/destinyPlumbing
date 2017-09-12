/* eslint-disable prefer-arrow-callback */
const AWS = require('aws-sdk');
const axios = require('axios');
const launchEc2Instance = require('./launchEc2Instance');

const s3 = new AWS.S3();

const MANIFEST_URL = 'https://www.bungie.net/platform/Destiny2/Manifest/';
const API_KEY = 'b661376f5d52484ea8a2f7d73407b96b';

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
  return getS3Item('index.json').then(function(manifest) {
    return manifest.version;
  });
}

function getBungieManifestVersion() {
  return axios
    .get(MANIFEST_URL, {
      headers: { 'X-API-Key': API_KEY },
    })
    .then(function(body) {
      return `${body
        .data.Response.version}|${body.data.Response.mobileWorldContentPaths.en}`;
    });
}

exports.handler = function mainHandler(event, context, cb) {
  const promises = [getDestinyPlumbingVersion(), getBungieManifestVersion()];

  Promise.all(promises)
    .then(args => {
      var ourVersion = args[0];
      var theirVersion = args[1];

      console.log('ourVersion:', ourVersion);
      console.log('theirVersion:', theirVersion);

      if (ourVersion !== theirVersion) {
        console.log('detected difference, launching instance');
        return launchEc2Instance();
      }

      return Promise.resolve();
    })
    .then(() => cb())
    .catch(err => {
      console.log('fuck error');
      console.log(err);
      cb(err);
    });
};
