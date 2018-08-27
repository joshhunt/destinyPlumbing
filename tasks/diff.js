const objectDiff = require('objectdiff');
const _ = require('lodash');
const { chain, forEach, sortBy, isEqual } = require('lodash');
const axios = require('axios');

const fileManager = require('../fileManager');
const { openJSON, listS3, mapPromiseAll } = require('../utils');
const diffHtmlTemplate = require('./diffHtmlTemplate');

const { FORCE_PREVIOUS_ID } = process.env;

function createDiffs(defName, current, previous, lang, defs) {
  if (!current) {
    throw new Error('Current items is undefined');
  }

  if (!previous) {
    throw new Error('Previous items is undefined');
  }

  console.log(
    `Running diff for ${defName} with`,
    Object.keys(current).length,
    'current items, and',
    Object.keys(previous).length,
    'previous items',
  );

  const templateDiffData = {
    new: [],
    unclassified: [],
    changed: [],
  };

  forEach(current, item => {
    const prevItem = previous[item.hash];
    if (!prevItem) {
      templateDiffData.new.push(item);
    } else if (
      prevItem.redacted &&
      !item.redacted &&
      item.displayProperties.name
    ) {
      templateDiffData.unclassified.push(item);
    } else if (!isEqual(item, prevItem)) {
      templateDiffData.changed.push(item);
    } else {
    }
  });

  const sorter = item =>
    item.itemCategoryHashes ? item.itemCategoryHashes.join(',') : 0;

  templateDiffData.new = _.sortBy(templateDiffData.new, sorter);
  templateDiffData.unclassified = _.sortBy(
    templateDiffData.unclassified,
    sorter,
  );
  templateDiffData.changed = _.sortBy(templateDiffData.changed, sorter);

  const friendlyDiff = {
    new: templateDiffData.new.map(item => item.hash),
    unclassified: templateDiffData.unclassified.map(item => item.hash),
    changed: templateDiffData.changed.map(item => item.hash),
  };

  const htmlPage = diffHtmlTemplate(defName, templateDiffData, {
    ...defs,
    itemDefs: current,
  });

  return Promise.resolve([
    fileManager.saveFile(
      [lang, 'diff', defName, 'friendly.json'],
      friendlyDiff,
    ),
    // fileManager.saveFile([lang, 'diff', defName, 'deep.json'], bigDiff),
    fileManager.saveFile([lang, 'diff', defName, 'diff.html'], htmlPage, {
      raw: true,
    }),
  ]);
}

function getPreviousDef(defName, lang, previousId) {
  const itemsUrl = `https://destiny.plumbing/versions/${previousId}/${lang}/raw/${defName}.json`;
  console.log(`Fetching previous def ${defName} for ID`, previousId);
  return axios.get(itemsUrl).then(r => r.data);
}

function getPreviousId() {
  if (FORCE_PREVIOUS_ID) {
    return Promise.resolve(FORCE_PREVIOUS_ID);
  }

  return listS3('versions/', '/')
    .then(_keys => {
      const keys = _keys.filter(k => {
        return !k.includes(global.HACKY_MANIFEST_ID);
      });
      return Promise.all(
        keys.map(k => axios.get(`https://destiny.plumbing/${k}index.json`)),
      );
    })
    .then(_allIndexes => {
      const allIndexes = _allIndexes.map(r => r.data);
      const sorted = sortBy(allIndexes, index => {
        return new Date(index.lastUpdated);
      }).reverse();

      const history = sorted.map(data => {
        return {
          id: data.id,
          lastUpdated: data.lastUpdated,
          bungieManifestVersion: data.bungieManifestVersion,
        };
      });

      fileManager.saveFile(['history.json'], history);

      const prevIndex = sorted[0];
      return prevIndex.id;
    });
}

const DEFINITIONS = [
  // 'DestinyActivityDefinition',
  // 'DestinyActivityModeDefinition',
  'DestinyInventoryItemDefinition',

  // 'DestinyAchievementDefinition',
  // 'DestinyActivityGraphDefinition',
  // 'DestinyActivityModifierDefinition',
  // 'DestinyActivityTypeDefinition',
  // 'DestinyBondDefinition',
  // 'DestinyChecklistDefinition',
  // 'DestinyClassDefinition',
  // 'DestinyDamageTypeDefinition',
  // 'DestinyDestinationDefinition',
  // 'DestinyEnemyRaceDefinition',
  // 'DestinyEquipmentSlotDefinition',
  // 'DestinyFactionDefinition',
  // 'DestinyGenderDefinition',
  // 'DestinyHistoricalStatsDefinition',
  // 'DestinyInventoryBucketDefinition',
  // 'DestinyItemCategoryDefinition',
  // 'DestinyItemTierTypeDefinition',
  // 'DestinyLocationDefinition',
  // 'DestinyLoreDefinition',
  // 'DestinyMaterialRequirementSetDefinition',
  // 'DestinyMedalTierDefinition',
  // 'DestinyMilestoneDefinition',
  // 'DestinyObjectiveDefinition',
  // 'DestinyPlaceDefinition',
  // 'DestinyPlugSetDefinition',
  // 'DestinyProgressionDefinition',
  // 'DestinyProgressionLevelRequirementDefinition',
  // 'DestinyRaceDefinition',
  // 'DestinyReportReasonCategoryDefinition',
  // 'DestinySackRewardItemListDefinition',
  // 'DestinySandboxPerkDefinition',
  // 'DestinySocketCategoryDefinition',
  // 'DestinySocketTypeDefinition',
  // 'DestinyStatDefinition',
  // 'DestinyStatGroupDefinition',
  // 'DestinyTalentGridDefinition',
  // 'DestinyUnlockDefinition',
  // 'DestinyVendorDefinition',
  // 'DestinyVendorGroupDefinition',
];

function diffDefinition(pathPrefix, definitionName, lang, previousId, defs) {
  return Promise.all([
    openJSON(`${pathPrefix}/raw/${definitionName}.json`),
    getPreviousDef(definitionName, lang, previousId),
  ]).then(([current, previous]) => {
    return createDiffs(definitionName, current, previous, lang, defs);
  });
}

module.exports = function createItemDumps(pathPrefix, lang) {
  if (lang !== 'en') {
    return Promise.resolve();
  }

  return Promise.all([
    getPreviousId(),
    openJSON(`${pathPrefix}/raw/DestinyItemCategoryDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyDamageTypeDefinition.json`),
    openJSON(`${pathPrefix}/raw/DestinyInventoryBucketDefinition.json`),
  ]).then(([previousId, itemCategory, damageType, bucket]) => {
    return mapPromiseAll(DEFINITIONS, definitionName => {
      return diffDefinition(pathPrefix, definitionName, lang, previousId, {
        itemCategory,
        damageType,
        bucket,
      });
    });
  });

  // const defName = 'DestinyInventoryItemDefinition';

  // return Promise.all([
  //   openJSON(`${pathPrefix}/raw/${defName}.json`),
  //   getPreviousItems(defName, lang),
  // ]).then(([current, previous]) =>
  //   createDiffs(defName, current, previous, lang),
  // );
};
