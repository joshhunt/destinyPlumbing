/* eslint-disable no-param-reassign */
const _ = require('lodash');

const definitions = require('../definitions');
const fileManager = require('../fileManager');
const { openJSON } = require('../utils');

const ITEM_PROPERTIES = [
  'displayProperties',
  'pgcrImage',
  'destinationHash',
  'placeHash',
  'activityTypeHash',
  'directActivityModeHash',
];

function processItems(allItems, lang) {
  const items = _(allItems)
    .toPairs()
    .map(([itemHash, item]) => {
      const payload = [itemHash, _.pick(item, ITEM_PROPERTIES)];
      return payload;
    })
    .fromPairs()
    .value();

  return fileManager.saveFile([lang, 'reducedActivities.json'], items);
}

module.exports = function createItemDumps(pathPrefix, lang) {
  return openJSON(`${pathPrefix}/raw/DestinyActivityDefinition.json`).then(
    items => processItems(items, lang),
  );
};
