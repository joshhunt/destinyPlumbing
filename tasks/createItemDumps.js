/* eslint-disable no-param-reassign */
const _ = require('lodash');

const definitions = require('../definitions');
const fileManager = require('../fileManager');
const { openJSON } = require('../utils');

function processItems(inventoryItems, lang) {
  const grouped = _(inventoryItems)
    .toPairs()
    .map(([hash, item]) => {
      // Yeah, this mutates all the items as well
      if (item.icon) {
        item.icon = `https://bungie.net${item.icon}`;
      }

      delete item.secondaryIcon;
      delete item.equippingBlock;
      delete item.sources;
      delete item.stats;
      delete item.setItemHashes;
      delete item.perkHashes;
      delete item.objectiveHashes;
      delete item.showActiveNodesInTooltip;
      delete item.allowActions;
      delete item.itemLevels;
      delete item.bountyResetUnlockHash;
      delete item.deleteOnAction;
      delete item.hasAction;
      delete item.hasGeometry;
      delete item.hasIcon;
      delete item.needsFullCompletion;
      delete item.needsFullCompletion;

      return [hash, item];
    })
    .groupBy((arg) => {
      const item = arg[1];
      const type = definitions.itemType[item.itemType.toString()];
      return type;
    })
    .reduce((acc, items, itemType) => {
      acc[itemType] = _.fromPairs(items);

      return acc;
    }, {});

  grouped.All = inventoryItems;

  // TODO: Only do one at a time?
  const promises = _.map(grouped, (items, itemType) => {
    return fileManager.saveFile([lang, 'items', `${itemType}.json`], items);
  });

  return Promise.all(promises);
}

module.exports = function createItemDumps(pathPrefix, lang) {
  return openJSON(`${pathPrefix}/raw/DestinyInventoryItemDefinition.json`)
    .then(items => processItems(items, lang));
};
