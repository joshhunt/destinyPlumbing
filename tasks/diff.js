const objectDiff = require('objectdiff');
const { chain, forEach, sortBy, isEqual } = require('lodash');
const axios = require('axios');

const fileManager = require('../fileManager');
const { openJSON, listS3 } = require('../utils');

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
    'previous items'
  );

  const bigDiff = chain(objectDiff.diff(previous, current).value)
    .toPairs()
    .filter(arr => arr[1].changed !== 'equal')
    .fromPairs()
    .value();

  const friendlyDiff = {
    new: [],
    unclassified: [],
    changed: []
  };

  forEach(current, item => {
    const prevItem = previous[item.hash];
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
    } else if (!isEqual(item, prevItem)) {
      // console.log('CHANGED:', item.hash, item.displayProperties.name);
      friendlyDiff.changed.push(item.hash);
    } else {
      // console.log('NO CHANGE:', item.hash, item.displayProperties.name);
    }
  });

  return Promise.resolve([
    fileManager.saveFile(
      [lang, 'diff', defName, 'friendly.json'],
      friendlyDiff
    ),
    fileManager.saveFile([lang, 'diff', defName, 'deep.json'], bigDiff)
  ]);
}

function getPreviousItems(defName, lang) {
  return listS3('versions/', '/')
    .then(_keys => {
      console.log('Keys from versions/', _keys);
      const keys = _keys.filter(k => {
        return !k.includes(global.HACKY_MANIFEST_ID);
      });
      console.log('Keys from versions/ (after excluding current ID)', keys);
      return Promise.all(
        keys.map(k => axios.get(`https://destiny.plumbing/${k}index.json`))
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

      const itemsUrl = `https://destiny.plumbing/versions/${prevIndex.id}/${lang}/raw/${defName}.json`;

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
    getPreviousItems(defName, lang)
  ]).then(([current, previous]) =>
    createDiffs(defName, current, previous, lang)
  );
};
