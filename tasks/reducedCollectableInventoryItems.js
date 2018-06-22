/* eslint-disable no-param-reassign */
const _ = require('lodash');

const definitions = require('../definitions');
const fileManager = require('../fileManager');
const { openJSON } = require('../utils');

const EMBLEM = 19;
const NO_ICON = 'missing_icon';

const ITEM_CATEGORY_HASHES = [
  1, // Weapon
  EMBLEM, // Emblems
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

const ITEM_WHITELIST = [];

const ITEM_BLACKLIST = [
  1744115122, // Legend of Acrius quest item
  460724140, // Jade Rabbit dupe
  546372301, // Jade Rabbit dupe
  2896466320, // Jade Rabbit dupe
  2978016230, // Jade Rabbit dupe
  3229272315, // Jade Rabbit dupe
  2769834047, // Old emblems
  3334815691, // Old emblems
  3754910498, // Old emblems
  4059318875, // Old emblems
  4114707355, // Old emblems
];

const ITEM_PROPERTIES = [
  'backgroundColor',
  'classType',
  'displayProperties',
  'emblemObjectiveHash',
  'hash',
  'inventory.stackUniqueLabel',
  'inventory.tierTypeHash',
  'inventory.tierTypeName',
  'itemCategoryHashes',
  'itemTypeDisplayName',
  'itemTypeName',
  'objectives.objectiveHashes',
  'plug.plugCategoryIdentifier',
  'plug.uiPlugLabel',
  'plug.insertionRules',
  'screenshot',
  'secondaryIcon',
  'stats.stats',
  'loreHash',
  // 'stats.stats[].statHash',
  // 'stats.stats[].value',
];

function processItems(allItems, lang) {
  const items = _(allItems)
    .toPairs()
    .filter(([itemHash, item]) => {
      if (ITEM_BLACKLIST.includes(item.hash)) {
        return false;
      }

      if (ITEM_WHITELIST.includes(item.hash)) {
        return true;
      }

      // Return Exotic Masterwork-related plug items
      if (
        item.plug &&
        item.plug.uiPlugLabel &&
        item.plug.uiPlugLabel.includes('masterwork')
      ) {
        return true;
      }

      // Return Exotic Masterwork-related plug items
      if (
        item.plug &&
        item.plug.plugCategoryIdentifier &&
        item.plug.plugCategoryIdentifier.includes('masterwork')
      ) {
        return true;
      }

      if (item.itemCategoryHashes && item.itemCategoryHashes.includes(EMBLEM)) {
        const secondaryIcon = _.get(item, 'secondaryIcon', '');
        const secondaryOverlay = _.get(item, 'secondaryOverlay', '');
        const secondarySpecial = _.get(item, 'secondarySpecial', '');

        if (
          secondaryIcon.includes(NO_ICON) ||
          secondaryOverlay.includes(NO_ICON) ||
          secondarySpecial.includes(NO_ICON)
        ) {
          return false;
        }
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
