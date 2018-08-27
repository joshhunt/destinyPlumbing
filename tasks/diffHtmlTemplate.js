const { get } = require('lodash');
const _ = require('lodash');

const WEAPON = 1;
const ARMOR = 20;

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
  const bucketHash = get(item, 'inventory.bucketTypeHash');

  if (!bucketHash) {
    return null;
  }

  return get(defs.bucket, `${bucketHash}.displayProperties.name`);
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
  src
    ? `<a href="https://www.bungie.net${src}" target="_blank"><img class="${className}" src="https://www.bungie.net${src}" /></a>`
    : '';

const itemIconClassName = item => {
  if (item.uiItemDisplayStyle === 'ui_display_style_engram') {
    return 'itemImage_transparent';
  }

  return 'itemImage';
};

const icon = (item, className) =>
  img(
    get(item, 'displayProperties.icon'),
    className || itemIconClassName(item),
  );

const table = (tableName, items, head, rowFn, defs) => {
  return `
    <table id="${tableName}">
      <thead>
        <tr class="titlerow">
          <td><h2>${HEADINGS[tableName] || tableName}</h2></td>
        </tr>
        ${head}
      </thead>
      <tbody>
        ${items.map(item => rowFn(item, defs)).join('')}
      </tbody>
    </table>
  `;
};

const KINETIC_WEAPON = 1498876634;
const ENERGY_WEAPON = 2465295065;
const POWER_WEAPON = 953998645;

const weaponSlotSorter = item => {
  const bucketHash = get(item, 'inventory.bucketTypeHash');

  switch (bucketHash) {
    case KINETIC_WEAPON:
      return 1;
    case ENERGY_WEAPON:
      return 2;
    case POWER_WEAPON:
      return 3;
  }
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

const commonItemRows = item => `
    <td><a href="https://data.destinysets.com/i/InventoryItem:${
      item.hash
    }" target="_blank">${item.hash}</a></td>
    <td class="table-cell-image">${icon(item)}</td>
    <td><a href="#${item.hash}">${get(
  item,
  'displayProperties.name',
  '',
)}</a></td>
    <td class="preserveNewlines">${get(
      item,
      'displayProperties.description',
      '',
    )}</td>
    <td class="nowrap">${get(item, 'itemTypeDisplayName', '')}</td>
    <td class="nowrap">${get(item, 'inventory.tierTypeName', '')}</td>
`;

const categories = (item, defs) => {
  return (item.itemCategoryHashes || [])
    .map(hash => {
      const category = defs.itemCategory[hash];
      return category
        ? `<span class="nowrap">${category.displayProperties.name}</span>`
        : null;
    })
    .filter(Boolean)
    .join(', ');
};

const tableRenders = {
  misc: {
    head: `
      <tr>
        <td>Hash</td>
        <td class="table-cell-image">Icon</td>
        <td>Name</td>
        <td>Description</td>
        <td>Type</td>
        <td>Rarity</td>
        <td>Categories</td>
      </tr>`,

    rows: (item, defs) => `
      <tr>
        ${commonItemRows(item)}
        <td>${categories(item, defs)}</td>
      </tr>
    `,
  },

  weapons: {
    head: `
      <tr>
        <td>Hash</td>
        <td class="table-cell-image">Icon</td>
        <td>Name</td>
        <td>Description</td>
        <td>Type</td>
        <td>Rarity</td>
        <td>Slot</td>
        <td>Damage type</td>
        <td>Categories</td>
      </tr>`,

    rows: (item, defs) => `
      <tr id="${item.hash}">
        ${commonItemRows(item)}
        <td class="nowrap">${getWeaponSlot(item, defs)}</td>
        <td class="nowrap">${getDamageType(item, defs)}</td>
        <td>${categories(item, defs)}</td>
      </tr>`,
  },
};

const HEADINGS = {
  weapons: 'Weapons',
  armor: 'Armor',
  emotes: 'Emotes',
  emblem: 'Emblems',
  everythingElse: 'Everything else',
};

function valueForTableName(tableName) {
  switch (tableName) {
    case 'weapons':
      return 1;
    case 'armor':
      return 2;
    case 'emotes':
      return 3;
    case 'everythingElse':
      return 1000000;
  }

  return 100;
}

function renderMultipleTables(obj, defs) {
  return _(obj)
    .toPairs()
    .sortBy(([tableName]) => valueForTableName(tableName))
    .map(([tableName, items]) => {
      const renderer = tableRenders[tableName] || tableRenders.misc;
      return table(tableName, items, renderer.head, renderer.rows, defs);
    })
    .value()
    .join('');
}

module.exports = function diffHtmlTemplate(definitionName, diffData, defs) {
  const newItems = _(diffData.new)
    .groupBy(item => {
      if (hasCategoryHash(item, WEAPON)) {
        return 'weapons';
      } else if (hasCategoryHash(item, ARMOR)) {
        return 'armor';
      } else if (hasCategoryHash(item, 44)) {
        return 'emotes';
      } else if (hasCategoryHash(item, 19)) {
        return 'emblem';
      }

      return 'everythingElse';
    })
    .value();

  const sortBy = [tierSortValue, 'itemTypeDisplayName'];

  newItems.weapons = _.sortBy(newItems.weapons, [
    ...sortBy,
    'itemTypeDisplayName',
  ]);
  newItems.armor = _.sortBy(newItems.armor, sortBy);
  newItems.emotes = _.sortBy(newItems.emotes, sortBy);
  newItems.everythingElse = _.sortBy(newItems.everythingElse, sortBy);

  const headings = _(newItems)
    .keys()
    .sortBy(valueForTableName)
    .value();

  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <script src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>
        <script src="https://unpkg.com/sticky-table-headers"></script>

        <style>
          body {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif
          }

          table {
            font-size: 14px;
            border-collapse: collapse;
            margin: 20px 0;
          }

          thead {
            font-weight: bold;
            white-space: nowrap;
            background: white;
          }

          .itemImage_transparent,
          .itemImage {
            max-height: 45px;
            max-width: 100px;
          }

          .itemImage {
            background: #585858;
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

          .preserveNewlines {
            white-space: pre-line;
          }

          nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          nav ul li {
            display: inline-block;
            padding: 0 10px;
          }

          nav ul li + li {
            border-left: 1px solid gainsboro;
          }

          .titlerow, .titlerow td {
            padding: 0;
            border: none;
          }

          .titlerow h2 {
            margin: 10px 0;
          }
        </style>
      </head>

      <body>


        <nav>
          <ul>
            ${headings
              .map(h => `<li><a href="#${h}">${HEADINGS[h] || h}</a></li>`)
              .join('')}
          </ul>
        </nav>

        ${renderMultipleTables(newItems, defs)}

        <script>
          $('table').stickyTableHeaders();
        </script>
      </body>
    </html>
  `;
};
