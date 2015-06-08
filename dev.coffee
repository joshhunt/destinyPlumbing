start = require './start'

stubbedContext =
    succeed: (res) ->
        console.log '\nTask completed.\n', res
        process.exit()

    fail: (err) ->
        console.log '\nCalled context.fail()'
        console.log (err.stack or err)

stubbedPayload =
    task: 'downloadManifestAndDispatch'
    data: {}

# stubbedPayload =
#   task: 'processDatabase'
#   data:
#     name: 'mobileWorldContent'
#     variation: 'en'
#     url: 'http://www.bungie.net/common/destiny_content/sqlite/en/world_sql_content_bafce26a4daec6ba6932e93bb5bd200c.content'

# stubbedPayload =
#   task: 'processDatabase'
#   data:
#     name: 'mobileWorldContent'
#     variation: 'ja'
#     url: 'http://www.bungie.net/common/destiny_content/sqlite/ja/world_sql_content_884749c1a137aa80b701fb175eb9620d.content'

# stubbedPayload =
#     task: 'processItems'
#     data: {}

# stubbedPayload = require './working/processDbAllCompleted.json'
# stubbedPayload = require './working/completedProcessDatabase.json'
# stubbedPayload = require './working/processItemsTask.json'
# stubbedPayload = require './working/lastSnsDryRun.json'
# stubbedPayload = require './working/makeIndexTask.json'

stubbedEvent =
    Records: [
        Sns:
            Message: JSON.stringify stubbedPayload
    ]

start.handler stubbedEvent, stubbedContext