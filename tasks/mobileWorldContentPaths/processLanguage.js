import {BUNGIE} from '../../consts';

import async from 'async';
import _ from 'lodash';

import {log, getDatabase, uploadToS3} from '../../lib';

const DB_NAME = 'mobileWorldContentPaths';

export default function processLanguage([lang, urlPath], done) {
    const url = BUNGIE + urlPath;

    getDatabase(url)
        .then(async.apply(uploadTables, lang))
        .then((partialIndex) => {
            log.warn(' ~~ uploadTables is done ~~~')
            done(null, partialIndex)
        })
        .catch(done);
}

function uploadTables(lang, tables, done) {
    const data = _.pairs(tables);

    const worker = async.apply(uploadTable, lang);

    async.map(data, worker, (err, results) => {
        log.warn(' ~~ uploadTables inner map func called ~~');
        const partialIndex = _.merge(...results);
        done(err, partialIndex);
    });
}

function uploadTable(lang, [tableName, data], done)  {
    const s3Key = `raw/${DB_NAME}/${lang}/${tableName}.json`;
    return uploadToS3(s3Key, data)
        .then(() => {
            const partialIndex = {
                raw: {[DB_NAME]: {[lang]: {[tableName]: s3Key} }}
            };
            done(null, partialIndex);
        })
        .catch(done)
};