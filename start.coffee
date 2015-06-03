exports.handler = (event, context) ->
    console.log 'Event:'
    console.log JSON.stringify(event)
    console.log ''

    snsEvent = event.Records[0].Sns
    payload = JSON.parse(snsEvent.Message)
    taskName = payload.task

    console.log 'Running task', taskName
    task = require("./tasks/#{taskName}")
    task taskName, payload.data
        .then (result) ->
            console.log 'Task finished.'
            context.succeed result
        .catch (err) ->
            console.log 'Task failed with error:'
            console.log err.stack
            context.fail err
