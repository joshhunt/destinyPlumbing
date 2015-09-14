import os from 'os';
import path from 'path';

const WORKING_DIR = path.join(os.tmpdir(), 'destinyPlumbing');
const MANIFEST_URL = 'http://www.bungie.net/platform/Destiny/Manifest/';
const BUNGIE = 'http://www.bungie.net';

module.exports = {WORKING_DIR, MANIFEST_URL, BUNGIE}