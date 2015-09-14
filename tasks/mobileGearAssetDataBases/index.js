import async from 'async';
import _ from 'lodash';

import {log, getDatabase, uploadToS3} from '../../lib';
import {BUNGIE} from '../../consts';

const DB_NAME = 'mobileGearAssetDataBases';

export default function mobileGearAssetDataBases(manifest, done) {
    log.warn('Starting mobileGearAssetDataBases');
    return done(null, {});

    const data = manifest.mobileGearAssetDataBases;

    async.map(data, processVersion, (err, results) => {
        log.warn('all of mobileGearAssetDataBases is done!')
        const partialIndex = _.merge(...results)
        done(err, partialIndex);
    });
}

function processVersion(item, done) {
    const url = BUNGIE + item.path;

    getDatabase(url)
        .then(async.apply(uploadItem, item))
        .then(async.apply(makeIndexFragment, done, item))
        .catch(done)
}

function uploadItem(item, data) {
    const s3Key = `raw/${DB_NAME}/v${item.version}.json`
    return uploadToS3(s3Key, data);
}

function makeIndexFragment(done, item, s3Key) {
    info.debug('Making index fragment');
    const itemKey = `v${item.version}`;
    const partialIndex = {
        raw: {[DB_NAME]: {[itemKey]: s3Key }}
    }
    done(null, partialIndex);
}