const fs = require('fs');
const _ = require('lodash');

const definitions = require('./definitions');
const fileManager = require('./fileManager');
const { mapPromiseAll } = require('./utils');

const RAW_DIR = './data';

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

      return [hash, item];
    })
    .groupBy(([hash, item]) => {
      const type = definitions.itemType[item.itemType.toString()];
      return type;
    })
    .reduce((acc, items, itemType) => {
      acc[itemType] = _.fromPairs(items);

      return acc;
    }, {});

  grouped.All = inventoryItems;

  const promises = _.map(grouped, (items, itemType) => {
    return fileManager.saveFile([lang, 'items', `${itemType}.json`], items);
  });

  return Promise.all(promises);
}

module.exports = function furtherProcessDumps() {
  console.log('running further process dumps');
  const langs = fs.readdirSync(RAW_DIR).filter((filename) => {
    return !filename.includes('.json');
  });

  return mapPromiseAll(langs, (lang) => {
    const inventoryItems = require(`./data/${lang}/raw/DestinyInventoryItemDefinition.json`);
    return processItems(inventoryItems, lang);
  });
};

if (!module.parent) {
  module.exports().catch((err) => {
    console.log('Error');
    console.log(err);
  });
}
