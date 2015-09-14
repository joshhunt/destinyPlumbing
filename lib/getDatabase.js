import {downloadFile, unzipFile, log, openDatabase} from '../lib';
import async from 'async';

export default function getDatabase(url) {
    return downloadFile(url)
        .then(unzipFile)
        .then(openDatabase)
        .then(extractData)
        .then((localPath) => {
            return localPath
        });
}

function extractData(db) {
    return new Promise((resolve, reject) => {
        const query = `SELECT name FROM sqlite_master WHERE type='table';`;
        db.all(query, (err, rows) => {
            if (err) {
                throw new Error(err.toString());
            }

            let allData = {};

            const getDataFromTable = (row, done) => {
                const tableName = row.name;
                const query = `SELECT * FROM ${tableName};`
                db.all(query, (err, tableRows) => {
                    const obj = {};

                    tableRows.forEach(({id, json}) => {
                        obj[id] = JSON.parse(json);
                    });

                    allData[tableName] = obj;
                    done(err);
                })
            }

            async.each(rows, getDataFromTable, (err) => {
                if (err) { return reject(err); }

                resolve(allData);
            });
        })
    })
}