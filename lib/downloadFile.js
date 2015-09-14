import fs from 'fs';
import path from 'path';
import http from 'http'

import _ from 'underscore';
import rimraf from 'rimraf';

import {WORKING_DIR} from '../consts';
import log from './log';

export default function downloadFile(url) {

    return new Promise((resolve, reject) => {
        const filename = path.basename(url);
        const destPath = path.join(WORKING_DIR, filename);

        fs.stat(destPath, (err, stat) => {
            if (!err) {
                log.info(`Returning cached ${url}`);
                return resolve(destPath);
            }

            rimraf(destPath, () => {
                log.info(`Downloading ${url}`);
                const destStream = fs.createWriteStream(destPath);

                http.get(url, (resp) => {
                    resp.pipe(destStream)

                    resp.on('end', () => {
                        destStream.close();
                        log.info(`Downloaded ${url} to ${destPath}`);
                        resolve(destPath);
                    })
                });
            });

        });
    });
}