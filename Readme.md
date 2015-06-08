This is the code that powers [destiny.plumbing](http://destiny.plumbing), and is
designed to be ran on [AWS Lambda](http://aws.amazon.com/lambda/) for really cheap.

In hindsight, this is a poor use of AWS Lambda (at least in it's current state) and
it's lead to messier code and execution flow than initially expected.

The process is broken up into multiple steps, or tasks:
 - `downloadManifestAndDispatch`: Downloads the manifest file from Bungie and dispatches `processDatabase` for each `.content` file.
 - `processDatabase`: Downloads a specified `.content` file (from the previous step) and runs a 'dbHandler' to dump it's contents and upload to S3.
    - At the moment, there is only a dbHandler for the mobileWorldContent database.
    - For each variation (language), we process the tables in series across multiple Lambda executions to get around the max 60s execution times
 - `processItems`: Create's specialised, friendlier JSON files for items.


## Changing contents of JSON files
To add, remove or change the contents of the items json files, you'll want to pay attention to `tasks/processItems.coffee`,
specifically the `itemHandlers` functions.

Other notes:
 * On AWS Lambda, run `index.handler()` via SNS.
 * For local development, specify a task within `dev.coffee` and execute and run `dev.coffee`.
 * If you're going to interact with AWS, make sure you set up a [IAM credentials](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html) with access to:
  * Read and write to the S3 bucket in `config.coffee`
  * Write to the SNS topic in `config.coffee`
  * Write to Lambda (to upload a new task)
  * Read CloudWatchLogs (for `logs.coffee` debugging)
 * Pull requests are welcome