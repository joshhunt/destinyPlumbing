const _ = require('lodash');

const definitions = require('../definitions');

const destinationFallback = {};
const placeFallback = {};
const activityTypeFallback = {};

const ACTIVITY_FIELDS = ['activityHash', 'activityName', 'pgcrImage'];

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

module.exports.getItem = function getItem(itemDefs, itemHash) {
  const item = itemDefs[itemHash];
  const refinedItem = _.pick(item, module.exports.ITEM_FIELDS);

  if (!item) {
    return null;
  }

  const className = definitions.classType[item.classType];

  if (className && !refinedItem.itemTypeName.includes(className)) {
    refinedItem.itemTypeName = `${className} ${refinedItem.itemTypeName}`;
  }

  return refinedItem;
};

module.exports.ITEM_FIELDS = ['itemName', 'icon', 'itemHash', 'itemTypeName'];
