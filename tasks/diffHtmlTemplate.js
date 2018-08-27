const { get } = require('lodash');
const _ = require('lodash');

const WEAPON = 1;
const ARMOR = 20;

const KINETIC_WEAPON = 2;
const ENERGY_WEAPON = 3;
const POWER_WEAPON = 4;

const EXOTIC = 2759499571;
const LEGENDARY = 4008398120;
const RARE = 2127292149;
const COMMON = 3340296461;
const UNCOMMON = 2395677314;

function hasCategoryHash(item, categoryHash) {
  return (
    item.itemCategoryHashes && item.itemCategoryHashes.includes(categoryHash)
  );
}

function getWeaponSlot(item, defs) {
  const hashes = item.itemCategoryHashes;
  const inventoryHash = get(item, 'inventory.bucketTypeHash');

  if (!inventoryHash) {
    return null;
  }

  return get(defs.bucket, `${inventoryHash}.displayProperties.name`);

  // if (hashes.includes(KINETIC_WEAPON)) {
  //   return get(defs.itemCategory[KINETIC_WEAPON], 'displayProperties.name');
  // } else if (hashes.includes(ENERGY_WEAPON)) {
  //   return get(defs.itemCategory[ENERGY_WEAPON], 'displayProperties.name');
  // } else if (hashes.includes(POWER_WEAPON)) {
  //   return get(defs.itemCategory[POWER_WEAPON], 'displayProperties.name');
  // }
}

function getDamageType(item, defs) {
  if (!item.damageTypeHashes) {
    return null;
  }

  console.log(item.damageTypeHashes);

  return item.damageTypeHashes
    .map(hash => {
      const def = defs.damageType[hash];

      if (!def) return null;

      const name = get(def, 'displayProperties.name');
      const iconHtml = icon(def, 'inlineImage');

      return [iconHtml, name].filter(Boolean).join(' ');
    })
    .filter(Boolean)
    .join(', ');
}

const img = (src, className) =>
  src ? `<img class="${className}" src="https://www.bungie.net${src}" />` : '';

const icon = (item, className) =>
  img(get(item, 'displayProperties.icon'), className || 'itemImage');

const table = (items, head, rowFn) => {
  return `
    <table>
      <thead>${head}</thead>
      <tbody>
        ${items.map(item => rowFn(item)).join('')}
      </tbody>
    </table>
  `;
};

const classifiedOrWhatever = item => {
  const name = get(item, 'displayProperties.name');
  const icon = get(item, 'displayProperties.icon');

  if (icon && name) {
    return 0;
  }

  if (!icon && !name) {
    return 10;
  } else if (icon && !name) {
    9;
  } else if (!icon && name) {
    8;
  }

  return 1;
};

const tierSortValue = item => {
  const tierTypeHash = get(item, 'inventory.tierTypeHash');

  if (tierTypeHash === EXOTIC) {
    return 0;
  } else if (tierTypeHash === LEGENDARY) {
    return 1;
  } else if (tierTypeHash === RARE) {
    return 2;
  } else if (tierTypeHash === UNCOMMON) {
    return 3;
  } else if (tierTypeHash === COMMON) {
    return 4;
  }
};

module.exports = function diffHtmlTemplate(definitionName, diffData, defs) {
  const newWeapons = _(diffData.new)
    .filter(item => hasCategoryHash(item, WEAPON))
    .sortBy([tierSortValue]);

  const newArmour = _(diffData.new)
    .filter(item => hasCategoryHash(item, ARMOR))
    .sortBy([tierSortValue]);

  return `
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif
          }

          table {
            font-size: 14px;
            border-collapse: collapse;
          }

          thead {
            font-weight: bold;
            white-space: nowrap;
          }

          .itemImage {
            max-height: 50px
          }

          .inlineImage {
            max-height: 1em;
          }

          td {
            border-bottom: 1px solid gainsboro;
            padding: 5px;
          }

          .table-cell-image {
            width: 1%;
          }

          .nowrap {
            white-space: nowrap;
          }
        </style>
      </head>

      <body>

        <h1>Weapons</h1>
        ${table(
          newWeapons,
          `
          <tr>
            <td>Hash</td>
            <td class="table-cell-image">Icon</td>
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Rarity</td>
            <td>Slot</td>
            <td>Damage type</td>
          </tr>
        `,
          item => `
            <tr>
              <td>${item.hash}</td>
              <td class="table-cell-image">${icon(item)}</td>
              <td>${get(item, 'displayProperties.name')}</td>
              <td>${get(item, 'displayProperties.description')}</td>
              <td class="nowrap">${get(item, 'itemTypeDisplayName')}</td>
              <td class="nowrap">${get(item, 'inventory.tierTypeName')}</td>
              <td class="nowrap">${getWeaponSlot(item, defs)}</td>
              <td class="nowrap">${getDamageType(item, defs)}</td>
            </tr>`,
        )}

        <h1>Armour</h1>
        ${table(
          newArmour,
          `
          <tr>
            <td>Hash</td>
            <td class="table-cell-image">Icon</td>
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
          </tr>
        `,
          item => `
            <tr>
              <td>${item.hash}</td>
              <td class="table-cell-image">${icon(item)}</td>
              <td>${get(item, 'displayProperties.name')}</td>
              <td>${get(item, 'displayProperties.description')}</td>
              <td class="nowrap">${get(item, 'itemTypeDisplayName')}</td>
            </tr>
        `,
        )}
      </body>
    </html>
  `;
};
