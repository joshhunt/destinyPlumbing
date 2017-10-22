const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const _ = require('lodash');
const mkdirp = require('mkdirp');
const unzip = require('unzip');
const async = require('async');
const AWS = require('aws-sdk');

const LOGGING_ENABLED = true;
const DIR_PREFIX = './working'; // relative to project root when ran with yarn

mkdirp(DIR_PREFIX);

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;
const SUPPRESS_S3_UPLOAD = process.env.SUPPRESS_S3_UPLOAD;

console.log('SLACK_WEBHOOK:', SLACK_WEBHOOK);
console.log('SUPPRESS_S3_UPLOAD:', SUPPRESS_S3_UPLOAD);

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

module.exports.s3 = s3;

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

module.exports.generateManifestID = function generateManifestID(manifest) {
  const idString = `${manifest.version}|${manifest.mobileWorldContentPaths.en}`;

  const id = crypto
    .createHash('md5')
    .update(idString)
    .digest('hex');

  return id;
};

module.exports.listS3 = function listS3(prefix, delimiter) {
  const opts = {
    Bucket: process.env.AWS_S3BUCKET,
    Prefix: prefix,
    Delimiter: delimiter,
  };

  return new Promise((resolve, reject) => {
    s3.listObjectsV2(opts, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.CommonPrefixes.map(obj => obj.Prefix));
      }
    });
  });
};

module.exports.uploadToS3 = function uploadToS3(_key, body, extraArgs) {
  const key = `${_key}`;

  if (SUPPRESS_S3_UPLOAD) {
    console.log(`  Suppressing upload of ${key} to S3`);
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const params = _.extend(
      {
        Bucket: process.env.AWS_S3BUCKET,
        Key: key,
        Body: body,
        ACL: 'public-read',
      },
      extraArgs || {}
    );

    s3.putObject(params, (err, resp) => {
      if (err) {
        console.log('. ERROR uploading to s3', key);
        console.log(err);
        reject(err);
      } else {
        console.log('. SUCCESS uploading to s3', key);
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
        const fileContents = _.isString(contents)
          ? contents
          : JSON.stringify(contents, null, 2);
        fs.writeFile(dest, fileContents, resolveCb(resolve, reject));
      })
      .catch(reject);
  });
};

function downloadToFile(destPath, url) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const req = https.get(url, resp => {
      resp.pipe(file);

      file.on('finish', () =>
        file.close(() => {
          resolve(destPath);
        })
      );
    });

    req.on('error', err => {
      fs.unlink(destPath);
      reject(err);
    });
  });
}

module.exports.downloadToFile = function cacheableDownloadToFile(dest, url) {
  const destPath = path.join(DIR_PREFIX, dest);

  return new Promise((resolve, reject) => {
    fs.access(destPath, err => {
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
  const outputFile = path.join(
    DIR_PREFIX,
    module.exports.changeExt(orig, 'content')
  );

  return unzipFile(destPath, orig).then(() => outputFile);
};

module.exports.alsoResolveWith = function alsoResolveWith(
  promise,
  ...extraArgs
) {
  return promise.then(result => {
    return [result, ...extraArgs];
  });
};

module.exports.mapPromiseAll = function mapPromiseAll(items, func) {
  const promises = _.map(items, func);
  return Promise.all(promises);
};

const COLOURS = {
  green: '#36a64f',
  red: '',
};

module.exports.notify = function notify(msg, colour) {
  const slackPayload = {
    username: 'destiny.plumbing',
    channel: 'destiny-plumbing',
    icon_url: 'https://i.imgur.com/obsiFKl.png',
  };

  if (colour) {
    slackPayload.attachments = [
      {
        fallback: msg,
        text: msg,
        color: COLOURS[colour],
      },
    ];
  } else {
    slackPayload.text = msg;
  }

  console.log(msg);

  if (!SLACK_WEBHOOK) {
    console.log(`** ${msg}`);
    console.log(
      ' ^^ Not sending notification because SLACK_WEBHOOK is not defined'
    );
    return;
  }

  fetch(SLACK_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(slackPayload),
  });
};

module.exports.readFile = function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, resolveCb(resolve, reject));
  });
};

module.exports.openJSON = function openJSON(filePath) {
  return module.exports.readFile(filePath).then(f => JSON.parse(f.toString()));
};

module.exports.mapLimitPromise = function mapLimitPromise(items, limit, func) {
  return new Promise((resolve, reject) => {
    async.mapLimit(
      items,
      limit,
      (item, cb) => {
        func(item)
          .then(result => cb(null, result))
          .catch(cb);
      },
      resolveCb(resolve, reject)
    );
  });
};
