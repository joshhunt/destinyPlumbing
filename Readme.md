# Destiny Data to S3 JSON files

This downloads the Destiny `mobileWorldContent` and extracts to a JSON file and uploads to S3.

AWS Lambda friendly.

To see all data that is saved, try this. Beware, this will write about 10mb of JSON

```coffee
fs = require 'fs'
destiny = require './lib/destiny'
tmpDir = '/tmp/'

destiny.downloadData tmpDir
    .then (allData) ->
        fs.writeFileSync 'allData.json', JSON.stringify(allData)
```

If you want to run the script locally from your computer to upload to S3, just execute `dumpDataToS3.coffee`, making sure you pass in a stubbed `context` object (needed for AWS Lambda). You can find a commented out example in index.js

The initial manifest-download code is heavily based on what's used by [DIM](https://github.com/kyleshay/DIM). Think of `destiny.coffee` as a promised-based coffeescript port of [DIM/build/processBungieManifest.js](https://github.com/kyleshay/DIM/blob/d65889c32165ab7ef7b0b9c1b01a4eda6621717f/build/processBungieManifest.js).