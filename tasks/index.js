import async from 'async';
import _ from 'lodash';

export default function(manifest) {
    const tasks = [
        // async.apply(require('./mobileGearAssetDataBases'), manifest),
        async.apply(require('./mobileWorldContentPaths'), manifest),
    ]

    return new Promise((resolve, reject) => {
        async.series(tasks, (err, results) => {
            if (err) return reject(err)

            const index = _.merge(...results);
            resolve(index);
        });
    })
}