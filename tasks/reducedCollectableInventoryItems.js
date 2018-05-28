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

const ITEM_WHITELIST = [
  136852797,
  1733620422,
  1783582993,
  1864989992,
  2085058762,
  2674202880,
  3466057365,
  4067652714,
  456628588,
  484491717,
  615063267,
  658317088,
  769440797,
  920755188,
  924149235,
  1249968539,
  1496699324,
  1824496860,
  3459475454,
  2409031770,
  2085058763,
  1824496861,
  1684153732,
  1249968538,
  1149703256,
  924149234,
  615063266,
  456628589,
  1758592809,
  2101754671,
  2282260621,
  2408641879,
  2626423393,
  2790377728,
  2858348497,
  3384861888,
  3804992459,
  4233905576,
  354293076,
  390807531,
  544137185,
  680163197,
  854868710,
  1620506138,
  1637046321,
  1678902463,
  4233905577,
  3867277431,
  3815768596,
  2858348496,
  2282260620,
  2142466730,
  1891148055,
  1772382457,
  1620506139,
  800074992,
  544137184,
  354293077,
  1772168355,
  2250482732,
  2603105938,
  3020272562,
  3866441869,
  3886232477,
  279743042,
  545668653,
  1152053821,
  1229065205,
  2381230784,
  2617688849,
  2673643645,
  2738497971,
  2988259322,
  3056315074,
  3617228241,
  4048567870,
  4113676118,
  332630382,
  396328063,
  545660112,
  640058316,
  669988236,
  702668825,
  917657364,
  1156021168,
  1447921738,
  1728120036,
  178451227,
  1344619701,
  2079505484,
  2397436643,
  3115221584,
  3386680334,
  3547298846,
  3969043896,
  1690229508,
  223776600,
  388458229,
  640411453,
  747033132,
  2079505485,
  837509459,
  959098413,
  1277486053,
  1835787579,
  2162261876,
  2533771627,
  3115221585,
  3546470356,
  3547298847,
  179202986,
  223776601,
  400177089,
  682783191,
  747033133,
  1902452687,
  1344619700,
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
