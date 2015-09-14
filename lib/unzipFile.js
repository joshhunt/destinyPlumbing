import fs from 'fs';
import path from 'path';

import unzip from 'unzip';

import {WORKING_DIR} from '../consts'
import {log} from '../lib'

export default function unzipFile(zipPath) {
    let wroteFile = false
    let destStream = null

    log.info(`Unzipping ${zipPath}`);

    return new Promise((resolve, reject) => {
        fs.createReadStream(zipPath)
            .pipe(unzip.Parse())
            .on('entry', (entry) => {
                if (wroteFile) {
                    entry.autodrain();
                    return;
                }

                wroteFile = true;
                let destPath = entry.path.replace(/^(.+)\.\w+$/, `$1.sql`);
                destPath = path.join(WORKING_DIR, destPath);
                destStream = fs.createWriteStream(destPath);

                entry.pipe(destStream)
                destStream.on('close', () => {
                    log.info(`Unzipped ${zipPath} to ${destPath}`);
                    resolve(destPath);
                });
            })
    });
}