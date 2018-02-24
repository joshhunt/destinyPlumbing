/* eslint-disable no-param-reassign */
const _ = require('lodash');

const definitions = require('../definitions');
const fileManager = require('../fileManager');
const { openJSON } = require('../utils');

const ITEM_CATEGORY_HASHES = [
  1, // Weapon
  19, // Emblems
  20, // Armor
  34, // Engrams
  35, // Consumables
  40, // Materials
  41, // Shaders
  42, // Ships
  43, // Sparrows
  44, // Emotes
  54, // Sword
  55, // Mask
  39, // Ghost
  1742617626, // Armour Ornaments
  3124752623, // Weapon Ornaments
];

const ITEM_BLACKLIST = [
  1744115122, // Legend of Acrius quest item
  460724140, // Jade Rabbit dupe
  546372301, // Jade Rabbit dupe
  2896466320, // Jade Rabbit dupe
  2978016230, // Jade Rabbit dupe
  3229272315, // Jade Rabbit dupe
];

const ITEM_PROPERTIES = [
  'hash',
  'itemTypeName',
  'screenshot',
  'itemTypeDisplayName',
  'vendorIdentifier',
  'classType',
  'stats.stats',
  'itemCategoryHashes',
  'displayProperties.name',
  'displayProperties.description',
  'displayProperties.icon',
  'inventory.tierTypeName',
  'inventory.tierTypeHash',
  'inventory.stackUniqueLabel',
  'plug.plugCategoryIdentifier',
  'plug.previewItemOverrideHash',
  'objectives',
  'secondaryIcon',
];

function processItems(allItems, lang) {
  const items = _(allItems)
    .toPairs()
    .filter(([itemHash, item]) => {
      if (ITEM_BLACKLIST.includes(item.hash)) {
        return false;
      }

      const intersected = _.intersection(
        item.itemCategoryHashes,
        ITEM_CATEGORY_HASHES,
      ).length;
      const include = !!intersected;

      return include;
    })
    .map(([itemHash, item]) => {
      const payload = [itemHash, _.pick(item, ITEM_PROPERTIES)];
      return payload;
    })
    .fromPairs()
    .value();

  return fileManager.saveFile(
    [lang, 'reducedCollectableInventoryItems.json'],
    items,
  );
}

module.exports = function createItemDumps(pathPrefix, lang) {
  return openJSON(`${pathPrefix}/raw/DestinyInventoryItemDefinition.json`).then(
    items => processItems(items, lang),
  );
};
