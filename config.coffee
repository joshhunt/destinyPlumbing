path = require 'path'

home = process.env[ if (process.platform == 'win32') then 'USERPROFILE' else 'HOME']

_lastManifestLocation = '~/.destinyPlumbing/working/processing/lastManifest.json'
_lastManifestLocation = path.join home, _lastManifestLocation.replace('~/', '')

module.exports =
    awsRegion: process.env.AWS_REGION or 'us-east-1'
    s3Bucket: 'destiny.plumbing'
    snsTopic: 'arn:aws:sns:us-east-1:167180637055:destinyPlumbing2'
    lastManifestLocation: _lastManifestLocation