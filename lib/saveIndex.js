import {log, uploadToS3} from '../lib';

export default function saveIndex(index) {
    const indexKey = 'index.json';
    return uploadToS3(indexKey, index);
}