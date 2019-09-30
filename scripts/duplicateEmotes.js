require('isomorphic-fetch');
const _ = require('lodash');

const url =
  'https://s3.amazonaws.com/destiny.plumbing/en/raw/DestinyInventoryItemDefinition.json';

const EMOTES = 44;
const MODS = 59;

const OLD_EMOTE_HASHES = [
  3179188489, // Curtain Call
  569940092, // Fireworks
  3340490891, // Home Run
  870041067, // Popcorn
  2775819545, // Awaken the Warmind
  1628538405, // Freaky Dance
  159967058, // Hold On
  2610757989, // Collaborative Dance
  2041281101, // Celebratory Dance
  285267633, // Synced Dance
  3518794540, // Air Quotes
  2284035163, // Applause
  1073496778, // Opulent Clap
  1008495915, // Shiver
  1229016681, // Zeus-Like Physique
  1348805779, // Impatience
];

fetch(url)
  .then(r => r.json())
  .then(items => {
    const grouped = _.groupBy(items, item => {
      if (!item.itemCategoryHashes) {
        return 'lol';
      }

      if (
        item.itemCategoryHashes.includes(EMOTES) &&
        item.itemCategoryHashes.includes(MODS)
      ) {
        return 'emotesAndMods';
      } else if (item.itemCategoryHashes.includes(EMOTES)) {
        return 'justEmotes';
      }

      return 'lol';
    });

    const justEmotes = _.keyBy(grouped.justEmotes, 'hash');
    const emotesAndMods = _.keyBy(
      grouped.emotesAndMods,
      'displayProperties.name',
    );

    OLD_EMOTE_HASHES.forEach(oldEmoteHash => {
      const oldEmote = items[oldEmoteHash];

      const newEmote = emotesAndMods[oldEmote.displayProperties.name];
      if (newEmote) {
        // console.log(
        //   `${oldEmote.displayProperties.name}: ${oldEmote.hash} => ${
        //     newEmote.hash
        //   }`,
        // );
        console.log(`${newEmote.hash}, // ${newEmote.displayProperties.name}`);
      } else {
        console.log(
          `UNABLE TO FIND NEW ${oldEmote.displayProperties.name}: ${oldEmote.hash} =>`,
        );
      }
    });
  })
  .catch(console.error);
