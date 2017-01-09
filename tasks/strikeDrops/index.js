const _ = require('lodash');

const definitions = require('../../definitions');
const fileManager = require('../../fileManager');
const { openJSON } = require('../../utils');

const dropData = require('./drops.json');

const destinationFallback = {};
const placeFallback = {};
const activityTypeFallback = {};

const ACTIVITY_FIELDS = [
  'activityHash',
  'activityName',
  'pgcrImage',
  // 'icon',
  // 'releaseIcon',
];

const ITEM_FIELDS = [
  'itemName',
  'icon',
  'itemHash',
  'itemTypeName',
];

function cleanActivities({ activityDefs, destinationDefs, placeDefs, activityTypeDefs }) {
  return _.mapValues(activityDefs, (activity) => {
    const cleaned = _.pick(activity, ACTIVITY_FIELDS);
    const destination = destinationDefs[activity.destinationHash] || destinationFallback;
    const place = placeDefs[activity.placeHash] || placeFallback;
    const activityType = activityTypeDefs[activity.activityTypeHash] || activityTypeFallback;

    return _.extend(cleaned, {
      isClassified: activity.activityName === 'Classified',
      destinationName: destination.destinationName,
      destinationIcon: destination.icon,
      placeName: place.placeName,
      activityTypeName: activityType.activityTypeName,
    });
  });
}

module.exports = function strikeDrops(pathPrefix, lang) {
  const promises = [
    openJSON(`${pathPrefix}/items/Armor.json`),
    openJSON(`${pathPrefix}/items/Weapon.json`),
    openJSON(`${pathPrefix}/raw/DestinyActivityDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyDestinationDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyPlaceDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyActivityTypeDefinition.json`),
  ];

  return Promise.all(promises)
    .then((results) => {
      const [
        armourDefs,
        weaponDefs,
        activityDefs,
        destinationDefs,
        placeDefs,
        activityTypeDefs,
      ] = results;

      const itemDefs = _.extend({}, weaponDefs, armourDefs);

      const activities = cleanActivities({
        activityDefs,
        destinationDefs,
        placeDefs,
        activityTypeDefs,
      });

      const dropLists = _(dropData)
        .map((dropList) => {
          const baseActivity = activities[dropList.activityHash];

          const matchingActivities = _.values(activities)
            .filter(activity => activity.activityName === baseActivity.activityName)
            .map(activity => activity.activityHash);

          // mutate the activities
          matchingActivities.forEach((activityHash) => {
            const activity = activities[activityHash];
            activity.dropListID = dropList.id;
          });

          return {
            id: dropList.id,
            baseActivityHash: dropList.activityHash,
            items: dropList.items,
          };
        })
        .value();

      const strikeItemHashes = dropLists
        .reduce((acc, dropList) => {
          const newItems = dropList.items.filter(itemHash => !acc.includes(itemHash));

          return acc.concat(newItems);
        }, [])
        .reduce((acc, itemHash) => {
          const item = itemDefs[itemHash];
          const refinedItem = _.pick(item, ITEM_FIELDS);

          const className = definitions.classType[item.classType];

          if (className && !refinedItem.itemTypeName.includes(className)) {
            refinedItem.itemTypeName = `${className} ${refinedItem.itemTypeName}`;
          }

          return _.extend({}, acc, {
            [item.itemHash]: refinedItem,
          });
        }, {});

      const data = {
        activities,
        dropLists: _.keyBy(dropLists, 'id'),
        strikeItemHashes,
      };

      return fileManager.saveFile([lang, 'collections', 'combinedStrikeDrops.json'], data);
    });
};
