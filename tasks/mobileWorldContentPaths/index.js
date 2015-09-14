import async from 'async';
import _ from 'lodash';

import log from '../../lib/log';
import processLanguage from './processLanguage';

export default function mobileWorldContentPaths(manifest, done) {
    const data = _.pairs(manifest.mobileWorldContentPaths);

    async.map(data, processLanguage, (err, results) => {
        log.warn(' ~~~ MobileWorldContentPaths is done ~~~');
        const partialIndex = _.merge(...results);
        done(err, partialIndex);
    });

    // done(null, {
    //     mobileWorldContentPaths: 'stubbed'
    // });
}