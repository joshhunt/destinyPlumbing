import path from 'path';
import fs from 'fs';

import axios from 'axios';
import mkdirp from 'mkdirp';

import {log, processManifest, saveIndex} from './lib';
import dataStore from './dataStore';
import runTasks from './tasks';
import {WORKING_DIR, MANIFEST_URL, BUNGIE} from './consts'

mkdirp.sync(WORKING_DIR);
dataStore.start(path.join(WORKING_DIR, 'datastore.json'));

axios.get(MANIFEST_URL)
    .then(processManifest)
    .then(runTasks)
    .then(saveIndex)
    .then(() => {
        log.info('All done!');
    })
    .catch((err) => {
        log.error(err.stack);
    })
