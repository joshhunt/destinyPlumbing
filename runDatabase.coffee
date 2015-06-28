executeTask = require './executeTask'

console.log 'Running'
[..., name, variation, url] = process.argv

executeTask {name, variation, url}