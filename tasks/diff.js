const objectDiff = require('objectdiff');
const {
  chain,
  forEach,
  sortBy,
  isEqual,
  isString,
  cloneDeepWith,
} = require('lodash');
const axios = require('axios');

const fileManager = require('../fileManager');
const { openJSON, listS3 } = require('../utils');

const isImage = value => isString(value) && value.match(/\.(png|jpg|jpeg)$/);

function cleaner(value) {
  if (isImage(value)) {
    return '<image>';
  }
}

function createDiffs(defName, current, previous, lang) {
  if (!current) {
    throw new Error('Current items is undefined');
  }

  if (!previous) {
    throw new Error('Previous items is undefined');
  }

  console.log(
    `Running diff for ${defName} with`,
    Object.keys(current).length,
    'current items, and',
    Object.keys(previous).length,
    'previous items',
  );

  const friendlyDiff = {
    new: [],
    unclassified: [],
    changed: [],
  };

  const promises = [];

  forEach(current, item => {
    const prevItem = previous[item.hash];

    const comparisonPrevItem = cloneDeepWith(prevItem || {}, cleaner);
    const comparisonItem = cloneDeepWith(item, cleaner);

    if (!prevItem) {
      console.log('NEW:', item.hash, item.displayProperties.name);
      friendlyDiff.new.push(item.hash);
    } else if (
      prevItem.redacted &&
      !item.redacted &&
      item.displayProperties.name
    ) {
      console.log('UNCLASSIFIED:', item.hash, item.displayProperties.name);
      friendlyDiff.unclassified.push(item.hash);
    } else if (!isEqual(comparisonItem, comparisonPrevItem)) {
      // console.log('CHANGED:', item.hash, item.displayProperties.name);
      friendlyDiff.changed.push(item.hash);
      const thisObjectDiff = objectDiff.diff(prevItem, item);

      promises.push(
        fileManager.saveFile(
          [lang, 'diff', defName, 'deep', `${item.hash}.json`],
          thisObjectDiff.value,
        ),
      );

      const html = `
        <html>
          <head>
            <link rel="stylesheet" href="http://nv.github.io/objectDiff.js/objectDiff.css"/>
            <link rel="stylesheet" href="http://nv.github.io/objectDiff.js/style.css"/>
          </head>
          <body>
            <pre id="result">${objectDiff.convertToXMLString(
              thisObjectDiff,
            )}</pre>
          </body>
        </html>
      `;

      promises.push(
        fileManager.saveFile(
          [lang, 'diff', defName, 'deep', `${item.hash}.html`],
          html,
        ),
      );
    } else {
      // console.log('NO CHANGE:', item.hash, item.displayProperties.name);
    }
  });

  promises.push(
    fileManager.saveFile(
      [lang, 'diff', defName, 'friendly.json'],
      friendlyDiff,
    ),
  );

  return Promise.resolve(promises);
}

function getPreviousItems(defName, lang) {
  return listS3('versions/', '/')
    .then(_keys => {
      const keys = _keys.filter(k => {
        return !k.includes(global.HACKY_MANIFEST_ID);
      });
      return Promise.all(
        keys.map(k => axios.get(`https://destiny.plumbing/${k}index.json`)),
      );
    })
    .then(_allIndexes => {
      const allIndexes = _allIndexes.map(r => r.data);
      const sorted = sortBy(allIndexes, index => {
        return new Date(index.lastUpdated);
      }).reverse();

      sorted.forEach(data => {
        console.log(`${data.id} - ${data.lastUpdated}`);
      });

      const prevIndex = sorted[0];

      console.log('global.HACKY_MANIFEST_ID:', global.HACKY_MANIFEST_ID);
      console.log('Previous:', prevIndex.id);

      const itemsUrl = `https://destiny.plumbing/versions/${
        prevIndex.id
      }/${lang}/raw/${defName}.json`;

      console.log('Fetching previous items for ID', prevIndex.id);
      return axios.get(itemsUrl).then(r => r.data);
    });
}

module.exports = function createItemDumps(pathPrefix, lang) {
  if (lang !== 'en') {
    return Promise.resolve();
  }

  const defName = 'DestinyInventoryItemDefinition';

  return Promise.all([
    openJSON(`${pathPrefix}/raw/${defName}.json`),
    getPreviousItems(defName, lang),
  ]).then(([current, previous]) =>
    createDiffs(defName, current, previous, lang),
  );
};
