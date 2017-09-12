const _ = require('lodash');

const fileManager = require('../../fileManager');
const { openJSON } = require('../../utils');
const { cleanActivities, getItem } = require('../commonUtils');

const raidDrops = require('./raidDrops.json');

const add = (obj, key, item) => {
  return Object.assign({}, obj, { [key]: item });
};

module.exports = function strikeDrops(pathPrefix, lang) {
  const promises = [
    openJSON(`${pathPrefix}/items/All.json`),
    openJSON(`${pathPrefix}/raw/DestinyActivityDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyDestinationDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyPlaceDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyActivityTypeDefinition.json`),
  ];

  return Promise.all(promises).then(results => {
    const [
      itemDefs,
      activityDefs,
      destinationDefs,
      placeDefs,
      activityTypeDefs,
    ] = results;

    const activities = cleanActivities({
      activityDefs,
      destinationDefs,
      placeDefs,
      activityTypeDefs,
    });

    const raidActivities = raidDrops.reduce((acc, dropList) => {
      const raid = activities[dropList.activityHash];

      if (!raid) {
        console.log(
          `Could not find activity for ${dropList.id}:${dropList.activityHash}`
        );
        return acc;
      }

      raid.dropListID = dropList.id;
      return add(acc, dropList.activityHash, raid);
    }, {});

    const dropLists = _.keyBy(raidDrops, 'id');

    const items = _(raidDrops)
      .flatMap(({ sections }) => {
        return _.flatMap(sections, 'items');
      })
      .reduce((acc, itemHash) => {
        const item = getItem(itemDefs, itemHash);
        if (!item) {
          console.log(`Could not find item for hash ${itemHash}`);
          return acc;
        }
        return add(acc, itemHash, item);
      }, {});

    const data = {
      activities: raidActivities,
      dropLists,
      items,
    };

    return fileManager.saveFile(
      [lang, 'collections', 'combinedRaidDrops.json'],
      data
    );
  });
};
