module.exports =
    awsRegion: process.env.AWS_REGION or 'us-east-1'
    s3Bucket: 'destiny.plumbing'
    snsTopic: 'arn:aws:sns:us-east-1:167180637055:destinyPlumbing2'