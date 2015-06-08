efs      = require 'fs'
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
    '!./node_modules/gulp*/**/*'
    '!./node_modules/**/*.jshintrc'
    '!./node_modules/**/*.html'
    '!./node_modules/**/*.md'
    '!./node_modules/**/*.markdown'
    '!./node_modules/**/*.npmignore'
    '!./node_modules/**/readme'
    '!./node_modules/**/node-v14-darwin-x64/**/*'
    './node_modules/sqlite3/node_modules/node-pre-gyp/**/*'

    './tasks/**/*'
    './resources/**/*'
    './utils/**/*'
    './index.js'
    './start.coffee'
    './config.coffee'
]
SNS_PUBLISH_ALREADY_RAN = false

_runViaSns = (done) ->
    if SNS_PUBLISH_ALREADY_RAN
        return

    SNS_PUBLISH_ALREADY_RAN = true
    task = 'downloadManifestAndDispatch'
    data = {}
    utils.snsPublish {task, data}
        .then        -> done()
        .catch (err) -> done(err)

gulp.task 'runViaSns', (done) ->
    _runViaSns done
    return

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
            fs.writeFileSync './working/lastLogs.txt', logs

        if Payload
            console.log Payload

        done()

    return

gulp.task 'archive', ->
    gulp.src ARCHIVE_FILES, {base: './'}
        .pipe zip('archive.zip')
        .pipe gulp.dest './working'

gulp.task 'copyBindings', ->
    gulp.src './files/sqliteBindings/**/*'
        .pipe gulp.dest './node_modules/sqlite3/lib/binding'

gulp.task 'upload', ['copyBindings'], ->
    gulp.src ARCHIVE_FILES, {base: './'}
        .pipe zip('archive.zip')
        .pipe gulp.dest './working'
        .pipe lambda(lambdaFunctionName, lambdaOptions)

gulp.task 'test', ['upload'], ->
    gulp.start 'run'