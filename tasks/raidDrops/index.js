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

  return Promise.all(promises)
    .then((results) => {
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

      const raidActivities = raidDrops.reduce((acc, wrathDroplist) => {
        const raid = activities[wrathDroplist.activityHash];
        raid.dropListID = wrathDroplist.id;
        return add(acc, wrathDroplist.activityHash, raid);
      }, {});

      const dropLists = _.keyBy(raidDrops, 'id');

      const items = _(raidDrops)
        .flatMap(({ sections }) => {
          return _.flatMap(sections, 'items');
        })
        .reduce((acc, itemHash) => {
          return add(acc, itemHash, getItem(itemDefs, itemHash));
        }, {});

      const data = {
        activities: raidActivities,
        dropLists,
        items,
      };

      return fileManager.saveFile([lang, 'collections', 'combinedRaidDrops.json'], data);
    });
};
