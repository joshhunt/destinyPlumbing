require('isomorphic-fetch');
const fs = require('fs');
const _ = require('lodash');
const objectdiff = require('../lib/objectDiff');

const versionA = '4e9f796b7a46e9661f822a62ebfa9cc2';
const versionB = '443c6d68dcdc7ce95c48d8041e76b5f3';

const lang = 'en';
const defName = 'DestinyInventoryItemDefinition';

const IGNORE_CHANGES = ['icon', 'screenshot'];

const get = (...args) => fetch(...args).then(r => r.json());

const defUrl = id =>
  `https://destiny.plumbing/versions/${id}/${lang}/raw/${defName}.json`;

const diffChecker = (diffResult, key, valueA, valueB) => {
  if (key === 'index') {
    return {
      changed: 'equal',
      value: valueA,
    };
  }

  if (
    diffResult.changed === 'primitive change' &&
    valueA &&
    valueB &&
    _.isString(valueA) &&
    (valueA.includes('.png') || valueA.includes('.jpg'))
  ) {
    return {
      changed: 'equal',
      value: valueA,
    };
  }

  return;
};

Promise.all([get(defUrl(versionA)), get(defUrl(versionB))])
  .then(([itemsA, itemsB]) => {
    const diffObject = objectdiff.diff(itemsA, itemsB, diffChecker);

    const changeDiff = _(diffObject.value)
      .toPairs()
      .filter(arr => arr[1].changed !== 'equal')
      .fromPairs()
      .value();

    fs.writeFileSync(
      'data/__changeDiff.json',
      JSON.stringify(changeDiff, null, 2),
    );

    const xmlDiff = objectdiff.convertToXMLString({
      changed: 'object change',
      value: changeDiff,
    });

    const html = `
    <html>
      <head>
        <link rel="stylesheet" href="http://nv.github.io/objectDiff.js/objectDiff.css"/>
        <link rel="stylesheet" href="http://nv.github.io/objectDiff.js/style.css"/>
      </head>
      <body><pre>${xmlDiff}</pre></body>
    </html>
    `;

    fs.writeFileSync('data/__changeDiff.html', html);
  })
  .catch(err => console.log(err));
