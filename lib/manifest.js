import dataStore from '../dataStore';
import log from './log';

export default function processManifest({data}) {
    const payload = data.Response;
    const {version} = payload;
    const lastVersion = dataStore.get('_lastManifestVersion');

    log.info('Last version was', lastVersion);
    log.info('This version is', version);

    if (lastVersion && lastVersion === version) {
        throw new Error('Version has not changed, exiting early.');
    }

    dataStore.set('lastManifestVersion', version);
    return payload;
}