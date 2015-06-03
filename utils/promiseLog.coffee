module.exports = (name, msg) -> (result) ->
    if msg
        console.log "[#{name}] #{msg}"
    else
        console.log name
    return result
