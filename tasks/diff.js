const objectDiff = require('objectdiff');
const { chain, forEach } = require('lodash');

const fileManager = require('../fileManager');
const { openJSON } = require('../utils');

function processItems(items, lang) {
  const prev = global.HACKY_PREVIOUS_ITEM_DEFS;
  const bigDiff = chain(objectDiff.diff(prev, items).value)
    .toPairs()
    .filter(([itemHash, diff]) => {
      return diff.changed !== 'equal';
    })
    .fromPairs()
    .value();
  // console.log(result.value);

  // forEach(result.value, diff => {
  //   if (diff.changed === 'equal') {
  //     return;
  //   }

  //   console.log(diff);
  // });

  const friendlyDiff = {
    new: [],
    unclassified: [],
  };

  forEach(items, item => {
    const prevItem = prev[item.hash];
    if (!prevItem) {
      console.log('NEW:', item.hash, item.displayProperties.name);
      friendlyDiff.new.push(item);
    } else if (
      prevItem.redacted &&
      !item.redacted &&
      item.displayProperties.name
    ) {
      console.log('UNCLASSIFIED:', item.hash, item.displayProperties.name);
      friendlyDiff.unclassified.push(item);
    }
  });

  return Promise.resolve([
    fileManager.saveFile([lang, 'diff', 'friendly.json'], friendlyDiff),
    fileManager.saveFile([lang, 'diff', 'deep.json'], bigDiff),
  ]);
}

module.exports = function createItemDumps(pathPrefix, lang) {
  if (lang !== 'en') {
    return Promise.resolve();
  }

  return openJSON(
    `${pathPrefix}/raw/DestinyInventoryItemDefinition.json`
  ).then(items => processItems(items, lang));
};
