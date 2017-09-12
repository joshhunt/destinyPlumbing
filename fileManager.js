const pathLib = require('path');
const { resolveCb, writeFile, uploadToS3 } = require('./utils');
const _ = require('lodash');
const async = require('async');

const manifestStore = [];

const PATH_PREFIX = process.env.PATH_PREFIX;

function pathsFromArray(path) {
  const finalPath = PATH_PREFIX ? [PATH_PREFIX, ...path] : path;

  const filePath = pathLib.join('data', ...finalPath);
  const s3Key = finalPath.join('/');

  return {
    filePath,
    s3Key,
  };
}

function saveFileWorker(task, cb) {
  const { path, obj } = task;

  const { filePath, s3Key } = pathsFromArray(path);

  // pretty print significantly increases file size, so ensure gzip is used
  const fileBody = JSON.stringify(obj, null, 2);

  manifestStore.push({ path, filePath, s3Key, obj });

  const id = path.join('.');
  console.log(id, 'uploading to', s3Key);

  const promises = [
    uploadToS3(s3Key, fileBody, { ContentType: 'application/json' }),
  ];

  // only save file if we set the option to
  process.env.WRITE_FILES && promises.push(writeFile(filePath, fileBody));

  return Promise.all(promises)
    .then(() => {
      console.log(id, 'successfully saved');
      cb();
    })
    .catch(cb);
}

const fileUploadQueue = async.queue(saveFileWorker, 4);

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
  const manifest = Object.assign(extraData, module.exports.collectManifest());

  const { filePath, s3Key } = pathsFromArray(['index.json']);

  const fileBody = JSON.stringify(manifest, null, 2);

  process.env.WRITE_FILES && writeFile(filePath, fileBody);

  return uploadToS3(s3Key, fileBody, {
    ContentType: 'application/json',
  });
};
