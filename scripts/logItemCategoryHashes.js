require('isomorphic-fetch');

const url =
  'https://destiny.plumbing/en/raw/DestinyItemCategoryDefinition.json';

const isGroupedCat = {};

fetch(url)
  .then(r => r.json())
  .then(categories => {
    Object.values(categories).forEach(category => {
      let msg = `${category.hash}: ${category.displayProperties.name}`;

      if (isGroupedCat[category.hash]) {
        return;
        msg += ' [subcategory]';
      }

      console.log(msg);

      if (
        category.groupedCategoryHashes &&
        category.groupedCategoryHashes.length
      ) {
        category.groupedCategoryHashes.forEach(groupedCatHash => {
          const groupedCat = categories[groupedCatHash.toString()];
          isGroupedCat[groupedCatHash] = true;
          console.log(
            ` - ${groupedCat.hash}: ${groupedCat.displayProperties.name}`,
          );
        });
      }
    });
  })
  .catch(console.error);
