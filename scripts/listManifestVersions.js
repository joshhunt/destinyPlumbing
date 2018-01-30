require('isomorphic-fetch');
const _ = require('lodash');

const { listS3 } = require('../utils');

const get = (...args) => fetch(...args).then(r => r.json());

listS3('versions/', '/')
  .then(keys => {
    console.log('');
    console.log('Keys from versions/', keys);
    return Promise.all(
      keys.map(k => get(`https://destiny.plumbing/${k}index.json`)),
    );
  })
  .then(allIndexes => {
    console.log('');
    _(allIndexes)
      .map(index =>
        Object.assign(index, {
          lastUpdated: new Date(index.lastUpdated),
        }),
      )
      .sortBy('lastUpdated')
      .forEach(index => {
        console.log(`${index.id} - ${index.lastUpdated}`);
      });
  });
