fs      = require 'fs'
gulp    = require 'gulp'
zip     = require 'gulp-zip'
lambda  = require 'gulp-awslambda'
install = require 'gulp-install'
utils = require './utils'

lambdaFunctionName = 'destinyPlumbing2'
lambdaOptions = {region: 'us-east-1'}

AWS     = require 'aws-sdk'
awsLambda  = new AWS.Lambda lambdaOptions

ARCHIVE_FILES = [
    './node_modules/**/*'
    './tasks/**/*'
    './utils/**/*'
    './index.js'
    './start.coffee'
    './config.coffee'
]

gulp.task 'install', ->
    gulp.src 'package.json'
        .pipe install()

gulp.task 'runViaSns', (done) ->
    task = 'downloadManifestAndDispatch'
    data = {}
    utils.snsPublish {task, data}
        .then        -> done()
        .catch (err) -> done(err)

gulp.task 'run', (done) ->
    params = {
        FunctionName: lambdaFunctionName
        LogType: 'Tail'
        InvocationType: 'RequestResponse'
        Payload: JSON.stringify({"Message":"{\"task\":\"downloadManifestAndDispatch\",\"data\":{}}"})
    }

    awsLambda.invoke params, (err, data={}) ->
        if err
            console.log 'Failed to request execution:'
            console.log err
            done err
            return

        {FunctionError, LogResult, Payload, StatusCode} = data

        console.log 'Returned status code', StatusCode

        if FunctionError
            console.log 'FunctionError:', FunctionError

        if LogResult
            logs = new Buffer(LogResult, 'base64').toString('ascii')
            console.log logs
            fs.writeFileSync './temp/lastLogs.txt', logs

        if Payload
            console.log Payload

        done()

    return

gulp.task 'archive', ['install'], ->
    gulp.src ARCHIVE_FILES, {base: './'}
        .pipe zip('archive.zip')
        .pipe gulp.dest './temp'

gulp.task 'upload', ['install'], ->
    gulp.src ARCHIVE_FILES, {base: './'}
        .pipe zip('archive.zip')
        .pipe gulp.dest './temp'
        .pipe lambda(lambdaFunctionName, lambdaOptions)

gulp.task 'test', ['upload'], ->
    gulp.start 'run'