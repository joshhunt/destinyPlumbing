const pathLib = require('path');
const { resolveCb, writeFile, uploadToS3 } = require('./utils');
const _ = require('lodash');
const async = require('async');

const manifestStore = [];

function saveFileWorker(task, cb) {
  const { path, obj } = task;

  const filePath = pathLib.join(...['data'].concat(path));
  const s3Key = path.join('/');

  const fileBody = JSON.stringify(obj);

  manifestStore.push({ path, filePath, s3Key, obj });

  const id = path.join('.');
  console.log(id, 'uploading to', s3Key);
  console.log('  saving to', filePath);

  return Promise.all([
    writeFile(filePath, fileBody),
    uploadToS3(s3Key, fileBody, {
      ContentType: 'application/json',
    }),
  ]).then(() => {
    console.log(id, 'successfully saved');
    cb();
  })
  .catch(cb);
}

const fileUploadQueue = async.queue(saveFileWorker, 4);

fileUploadQueue.drain = () => {
  console.log('fileManager queue is empty');
};

module.exports.saveFile = function saveFileQueuer(path, obj) {
  return new Promise((resolve, reject) => {
    fileUploadQueue.push({ path, obj }, resolveCb(resolve, reject));
  });
};

module.exports.collectManifest = function collectManifest() {
  const manifest = manifestStore.reduce((acc, file) => {
    const [...path] = file.path;
    const fileName = path[path.length - 1].split('.')[0];
    path[path.length - 1] = fileName;

    const objectPath = path.join('.');
    const url = `https://destiny.plumbing/${file.s3Key}`;
    _.set(acc, objectPath, url);

    return acc;
  }, {});

  return manifest;
};

module.exports.saveManifest = function saveManifest(extraData = {}) {
  const manifest = Object.assign({}, module.exports.collectManifest(), extraData);
  const s3Key = 'index.json';
  const fileBody = JSON.stringify(manifest, null, 2);

  writeFile('data/index.json', fileBody);

  return uploadToS3(s3Key, fileBody, {
    ContentType: 'application/json',
  });
};
