const _ = require('lodash');

const fileManager = require('../../fileManager');
const { openJSON } = require('../../utils');
const { cleanActivities, getItem } = require('../commonUtils');

const dropData = require('./drops.json');

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

    const dropLists = _(dropData)
      .map(dropList => {
        const baseActivity = activities[dropList.activityHash];

        if (!baseActivity) {
          console.log(
            `Could not find activity for ${dropList.id}:${
              dropList.activityHash
            }`,
          );
          return null;
        }

        const matchingActivities = _.values(activities)
          .filter(
            activity => activity.activityName === baseActivity.activityName,
          )
          .map(activity => activity.activityHash);

        // mutate the activities
        matchingActivities.forEach(activityHash => {
          const activity = activities[activityHash];
          activity.dropListID = dropList.id;
        });

        return {
          id: dropList.id,
          baseActivityHash: dropList.activityHash,
          items: dropList.items,
        };
      })
      .filter(Boolean)
      .value();

    const strikeItemHashes = dropLists
      .reduce((acc, dropList) => {
        const newItems = dropList.items.filter(
          itemHash => !acc.includes(itemHash),
        );

        return acc.concat(newItems);
      }, [])
      .reduce((acc, itemHash) => {
        return _.extend({}, acc, {
          [itemHash]: getItem(itemDefs, itemHash),
        });
      }, {});

    const data = {
      activities,
      dropLists: _.keyBy(dropLists, 'id'),
      strikeItemHashes,
    };

    return fileManager.saveFile(
      [lang, 'collections', 'combinedStrikeDrops.json'],
      data,
    );
  });
};
