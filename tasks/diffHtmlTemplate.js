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

      const name = getName(def);
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

const getName = item => {
  return (
    get(item, 'displayProperties.name') ||
    item.progressDescription ||
    item.statName ||
    ''
  );
};

const getDescription = (item, itemDefs) => {
  // console.log(item.sockets);

  const perkSocket = _.get(item, 'sockets.socketEntries', []).find(socket => {
    // console.log(socket);
    const plugDef = itemDefs.inventoryItem[socket.singleInitialItemHash];
    if (_.get(plugDef, 'plug.plugCategoryIdentifier') === 'intrinsics') {
      return true;
    }
  });

  const perk =
    perkSocket && itemDefs.inventoryItem[perkSocket.singleInitialItemHash];

  const textDescription =
    get(item, 'displayProperties.description') || item.statDescription || '';

  return `
    <span class="preserveNewlines">${textDescription}</span>
    ${
      perk
        ? `<p class="perk">${icon(perk, 'perkImage')} <strong>${_.get(
            perk,
            'displayProperties.name',
          )}</strong>: ${_.get(perk, 'displayProperties.description')}</p>`
        : ''
    }
  `;
};

const table = (tableName, items, head, rowFn, defs, definitionName) => {
  return `
    <table id="${tableName}">
      <thead>
        <tr class="titlerow">
          <td><h2>${HEADINGS[tableName] || tableName}</h2></td>
        </tr>
        ${head}
      </thead>
      <tbody>
        ${items.map(item => rowFn(item, defs, definitionName)).join('')}
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

const shortDefName = definitionName => {
  if (!definitionName) {
    return 'InventoryItem';
  }

  const match = (definitionName || 'DestinyInventoryItemDefinition').match(
    /Destiny(\w+)Definition/,
  );
  return match ? match[1] : definitionName;
};

const commonItemRows = (item, defs, definitionName) => `
    <td><a href="https://data.destinysets.com/i/${shortDefName(
      definitionName,
    )}:${item.hash}" target="_blank">${item.hash || item.statId}</a></td>
    <td class="table-cell-image">${icon(item)}</td>
    <td><a href="#${item.hash}">${getName(item)}</a></td>
    <td>${getDescription(item, defs)}</td>
    <td class="nowrap">${get(item, 'itemTypeDisplayName', '')}</td>
    <td class="nowrap">${get(item, 'inventory.tierTypeName', '')}</td>
`;

const categories = (item, defs) => {
  return (item.itemCategoryHashes || [])
    .map(hash => {
      const category = defs.itemCategory[hash];
      return category
        ? `<span class="nowrap">${getName(category)}</span>`
        : null;
    })
    .filter(Boolean)
    .join(', ');
};

const AMMO_TYPE = {
  0: 'None',
  1: 'Primary',
  2: 'Special',
  3: 'Heavy',
  4: 'Unknown',
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

    rows: (item, defs, defName) => `
      <tr>
        ${commonItemRows(item, defs, defName)}
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
        <td>Ammo type</td>
      </tr>`,

    rows: (item, defs, defName) => `
      <tr id="${item.hash}">
        ${commonItemRows(item, defs, defName)}
        <td class="nowrap">${getWeaponSlot(item, defs)}</td>
        <td class="nowrap">${getDamageType(item, defs)}</td>
        <td class="nowrap">${
          AMMO_TYPE[_.get(item, 'equippingBlock.ammoType', 4)]
        }</td>
      </tr>`,
  },
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

function renderMultipleTables(obj, defs, definitionName) {
  return _(obj)
    .toPairs()
    .sortBy(([tableName]) => valueForTableName(tableName))
    .map(([tableName, items]) => {
      if (!items || items.length === 0) {
        return null;
      }

      const renderer = tableRenders[tableName] || tableRenders.misc;
      return table(
        tableName,
        items,
        renderer.head,
        renderer.rows,
        defs,
        definitionName,
      );
    })
    .filter(Boolean)
    .value()
    .join('');
}

const HEADINGS = {
  weapons: 'Weapons',
  armor: 'Armor',
  ghosts: 'Ghosts',
  emotes: 'Emotes',
  emblem: 'Emblems',
  ships: 'Ships',
  sparrows: 'Sparrows',
  objectives: 'Objectives',
  everythingElse: 'Everything else',
  weaponOrnaments: 'Weapon ornaments',
  armorOrnaments: 'Armor ornaments',
};

const ITEM_CATEGORY_GROUPINGS = [
  [WEAPON, 'weapons'],
  [ARMOR, 'armor'],
  [39, 'ghosts'],
  [44, 'emotes'],
  [19, 'emblem'],
  [42, 'ships'],
  [43, 'sparrows'],
  [3124752623, 'weaponOrnaments'],
  [1742617626, 'armorOrnaments'],
];

module.exports = function diffHtmlTemplate(
  definitionName,
  diffData,
  defs,
  title,
  _extraLinks,
) {
  const sortBy = [tierSortValue, 'itemTypeDisplayName'];
  const extraLinks = _extraLinks || [];

  const newItems = _(diffData)
    .groupBy(item => {
      if (definitionName === 'DestinyObjectiveDefinition') {
        return 'objectives';
      }

      const found = ITEM_CATEGORY_GROUPINGS.find(([categoryHash]) => {
        return hasCategoryHash(item, categoryHash);
      }) || [0, 'everythingElse'];

      return found[1];
    })
    .mapValues(items => _.sortBy(items, sortBy))
    .value();

  newItems.weapons = _.sortBy(newItems.weapons, [
    ...sortBy,
    'itemTypeDisplayName',
  ]);

  const headings = _(newItems)
    .toPairs()
    .filter(([key, items]) => items.length > 0)
    .map(([key, items]) => key)
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

          strong {
            font-weight: 600;
          }

          .itemImage {
            background: #585858;
          }

          .inlineImage {
            max-height: 1em;
          }

          .perk {
            font-style: italic;
            font-size: .9em;
          }

          .perkImage {
            max-height: 1.25em;
            padding: 3px;
            border-radius: 50%;
            background: #80B2D4;
            vertical-align: middle;
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

          a[href*="#"] {
            color: inherit
          }

          .altlink {
            display: inline-block;
            margin-left: 1.5em;
            font-size: 20px;
          }

          .altlink a {
            color: #717171 !important;
          }
        </style>
      </head>

      <body>

        <h1>
          ${title}

          ${extraLinks
            .map(
              link =>
                `<span class="altlink"><a href="${link.link}">${
                  link.text
                }</a></span>`,
            )
            .join('')}
        </h1>

        ${
          headings.length > 1
            ? `
          <nav>
            <ul>
              ${headings
                .map(h => `<li><a href="#${h}">${HEADINGS[h] || h}</a></li>`)
                .join('')}
            </ul>
          </nav>
        `
            : ''
        }

        ${renderMultipleTables(newItems, defs, definitionName)}

        <script>
          $('table').stickyTableHeaders();
        </script>
      </body>
    </html>
  `;
};
