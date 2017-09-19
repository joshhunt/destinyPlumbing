#!/bin/bash

# cd /root/destinyPlumbing

git pull

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

AWS_ACCESS_KEY_ID=xxx \
AWS_SECRET_ACCESS_KEY=xxx \
AWS_S3BUCKET=destiny.plumbing \
SLACK_WEBHOOK=https://hooks.slack.com/services/xxx \
  node checkManifest.js
