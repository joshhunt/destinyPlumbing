const _ = require('lodash');

const definitions = require('../definitions');

const destinationFallback = {};
const placeFallback = {};
const activityTypeFallback = {};

const ACTIVITY_FIELDS = ['activityHash', 'displayProperties', 'pgcrImage'];

module.exports.cleanActivities = function cleanActivities(params) {
  const { activityDefs, destinationDefs, placeDefs, activityTypeDefs } = params;
  return _.mapValues(activityDefs, activity => {
    const cleaned = _.pick(activity, ACTIVITY_FIELDS);
    const destination =
      destinationDefs[activity.destinationHash] || destinationFallback;
    const place = placeDefs[activity.placeHash] || placeFallback;
    const activityType =
      activityTypeDefs[activity.activityTypeHash] || activityTypeFallback;

    return _.extend(cleaned, {
      isClassified: activity.activityName === 'Classified',
      destinationName: destination.destinationName,
      destinationIcon: destination.icon,
      placeName: place.placeName,
      activityTypeName: activityType.activityTypeName,
    });
  });
};

// TODO: use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead
module.exports.getItem = function getItem(itemDefs, itemHash) {
  const item = itemDefs[itemHash];
  const refinedItem = _.pick(item, module.exports.ITEM_FIELDS);
  // const refinedItem = _.omit(item, module.exports.ITEM_FIELDS_EXCLUDE);

  if (!item) {
    return null;
  }

  const className = definitions.classType[item.classType];

  if (className && !refinedItem.itemTypeDisplayName.includes(className)) {
    refinedItem.itemTypeDisplayName = `${className} ${
      refinedItem.itemTypeDisplayName
    }`;
  }

  return refinedItem;
};

module.exports.ITEM_FIELDS = [
  'hash',
  'displayProperties',
  'screenshot',
  'itemTypeDisplayName',
];
