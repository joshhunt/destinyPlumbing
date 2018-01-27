const _ = require('lodash');

const fileManager = require('../fileManager');
const { openJSON } = require('../utils');

const HASHES = [
  1242428023,
  1510638018,
  1899914236,
  1054437662,
  3082437135,
  4060674255,
  29391997,
  640149492,
  2883258157,
];

module.exports = function reducedArmorTypePerks(pathPrefix, lang) {
  const promises = [
    openJSON(`${pathPrefix}/raw/DestinySandboxPerkDefinition.json`),
  ];

  return Promise.all(promises).then(results => {
    const [perkDefs] = results;

    const reducedPerks = _(perkDefs)
      .values()
      .filter(perk => HASHES.includes(perk.hash))
      .keyBy(perk => perk.hash)
      .value();

    return fileManager.saveFile(
      [lang, 'reducedArmorTypePerks.json'],
      reducedPerks,
    );
  });
};
