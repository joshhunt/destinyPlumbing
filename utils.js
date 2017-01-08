const https = require('https');
const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const mkdirp = require('mkdirp');
const unzip = require('unzip');
const AWS = require('aws-sdk');

const LOGGING_ENABLED = true;
const DIR_PREFIX = './working'; // relative to project root when ran with yarn

mkdirp(DIR_PREFIX);

const IFFT_URL = process.env.IFFT_URL;

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

function resolveCb(resolve, reject) {
  return (err, result) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      resolve(result);
    }
  };
}

function mkdirpPromised(dir) {
  return new Promise((resolve, reject) => {
    mkdirp(dir, resolveCb(resolve, reject));
  });
}

function log(...args) {
  if (!LOGGING_ENABLED) return;
  console.log(...args);
}

function ensureDir(dest) {
  const fileDir = path.parse(dest).dir;
  return mkdirpPromised(fileDir);
}

module.exports.uploadToS3 = function uploadToS3(_key, body, extraArgs) {
  const key = `${_key}`;

  return new Promise((resolve, reject) => {
    const params = _.extend({
      Bucket: process.env.AWS_S3BUCKET,
      Key: key,
      Body: body,
      ACL: 'public-read',
    }, extraArgs || {});

    s3.putObject(params, (err, resp) => {
      if (err) {
        console.log('ERROR uploading to s3', key);
        console.log(err);
        reject(err);
      } else {
        // console.log('SUCCESS uploading to s3', key);
        resolve(resp);
      }
    });
  });
};

module.exports.resolveCb = resolveCb;

module.exports.changeExt = function changeExt(input, newExt) {
  return path.parse(input).name + '.' + newExt;
};

module.exports.writeFile = function writeFile(dest, contents) {
  return new Promise((resolve, reject) => {
    ensureDir(dest)
      .then(() => {
        const fileContents = _.isString(contents) ? contents : JSON.stringify(contents, null, 2);
        fs.writeFile(dest, fileContents, resolveCb(resolve, reject));
      })
      .catch(reject);
  });
};

function downloadToFile(destPath, url) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const req = https.get(url, (resp) => {
      resp.pipe(file);

      file.on('finish', () => file.close(() => {
        resolve(destPath);
      }));
    });

    req.on('error', (err) => {
      fs.unlink(destPath);
      reject(err);
    });
  });
}

module.exports.downloadToFile = function cacheableDownloadToFile(dest, url) {
  const destPath = path.join(DIR_PREFIX, dest);

  return new Promise((resolve, reject) => {
    fs.access(destPath, (err) => {
      if (err) {
        // file doesnt exist, download it
        downloadToFile(destPath, url)
          .then(resolve)
          .catch(reject);
      } else {
        // File already exists, resolve immediately
        log(destPath, 'already exists, finishing early');
        resolve(destPath);
      }
    });
  });
};

function unzipFile(dest, orig) {
  return new Promise((resolve, reject) => {
    const extractor = unzip.Extract({ path: dest });

    extractor.on('close', () => {
      resolve(orig);
    });
    extractor.on('error', reject);

    fs.createReadStream(orig).pipe(extractor);
  });
}

module.exports.unzipFile = function cacheableUnzipFile(dest, orig) {
  const destPath = path.join(DIR_PREFIX, dest);
  const outputFile = path.join(DIR_PREFIX, module.exports.changeExt(orig, 'content'));

  return unzipFile(destPath, orig)
    .then(() => outputFile);
};

module.exports.alsoResolveWith = function alsoResolveWith(promise, ...extraArgs) {
  return promise.then(result => {
    return [result, ...extraArgs];
  });
};

module.exports.mapPromiseAll = function mapPromiseAll(items, func) {
  const promises = _.map(items, func);
  return Promise.all(promises);
};

module.exports.notify = function notify(msg) {
  console.log(msg);

  if (!IFFT_URL) {
    console.log('[Not sending notification because IFFT_URL not defined]');
  }

  fetch(IFFT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      value1: msg,
    }),
  });
};
