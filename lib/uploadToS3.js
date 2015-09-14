import path from 'path';
import fs from 'fs';

import _ from 'lodash';
import mkdirp from 'mkdirp';
import async from 'async';
import AWS from 'aws-sdk';

import log from './log';
import config from '../config'
import {WORKING_DIR} from '../consts'

const s3 = new AWS.S3({
    region: config.awsRegion,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
});

const DEFAULT_CONTENT_TYPE = 'application/json;charset=utf-8';

function queueWorker(args, done) {
    uploadToS3(...args)
        .then(() => done())
        .catch(err => done(err))
}

export default function(key) {
    const args = arguments;
    return new Promise((resolve, reject) => {
        uploadQueue.push(args, (err) => {
            if (err) { return reject(err); }
            resolve('in:' + key);
        });
    });
}

function uploadToS3(key, data, contentType) {
    log.info(`Uploading data to s3:/${key}`);

    if (!_.isString(data)) {
        data = JSON.stringify(data, null, 2)
        contentType = DEFAULT_CONTENT_TYPE
    }

    let params = {
        Key: key,
        Body: data,
        ACL: 'public-read',
        Bucket: config.s3Bucket,
        ContentType: contentType,
    }

    return new Promise((resolve, reject) => {
        if (!(config.gzip && !config.s3DryRun)) {
            return upload(params, resolve, reject);;
        }

        log.info(`Gzipping for ${params.Key}`);
        zlib.gzip(params.Body, (err, result) => {
            params.Body = result;
            params.ContentEncoding = 'gzip';
            upload(params, resolve, reject);
        })
    })
}

function upload(...args) {
    const func = config.s3DryRun ? dryRunAction : uploadAction;
    func(...args);
}

function uploadAction(params, resolve, reject) {
    s3.putObject(params, (err) => {
        if (err) return reject(err)

        log.info(`Uploaded file to ${params.Key}`);
        resolve(params.Key);
    })
}

function dryRunAction(params, resolve, reject) {
    const filePath = path.join(WORKING_DIR, 's3DryRun', params.Key);
    const folderPath = filePath.substring(0, filePath.lastIndexOf('/'));

    log.info(`S3 dry run saving to ${filePath}`);

    mkdirp(folderPath, (err) => {
        if (err) return reject(err)

        fs.writeFile(filePath, params.Body, (err) =>{
            if (err) return reject(err)
            resolve('dryRun/' + params.Key);
        })
    })
}

const uploadQueue = async.queue(queueWorker, 10);

uploadQueue.saturated = () => {
    log.warn('Queue has reached saturation');
}

uploadQueue.empty = () => {
    log.warn('Queue is empty');
}

uploadQueue.drain = () => {
    log.warn('Queue has finished all tasks');
}

setInterval(() => {
    if (uploadQueue.started) {
        log.info(`There are ${uploadQueue.running()} items in the upload queue`)
    }
}, 3 * 1000)