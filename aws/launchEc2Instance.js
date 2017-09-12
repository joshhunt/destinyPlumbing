const AWS = require('aws-sdk');
const ec2 = new AWS.EC2({ region: 'ap-southeast-2' });

const spotJson = require('./spot.json');

const cloudInit = `#cloud-config
runcmd:
 - |
   echo "Sourcing NVM"
   export NVM_DIR="/home/ubuntu/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"

   echo "Activing node 6"
   nvm use 6

   echo "Pulling latest code"
   cd /home/ubuntu/destinyPlumbing
   git pull

   echo "Installing latest dependencies"
   npm install

   AWS_S3BUCKET=destiny.plumbing-new \
    WRITE_FILES=true \
    node downloadAndProcess.js

  shutdown -h now`;

module.exports = function launchEc2Instance() {
  return new Promise((resolve, reject) => {
    const userDataBase64 = new Buffer(cloudInit).toString('base64');
    spotJson.LaunchSpecifications[0].UserData = userDataBase64;

    const validUntil = new Date();
    validUntil.setHours(validUntil.getHours() + 1);
    spotJson.ValidFrom = new Date();
    spotJson.ValidUntil = validUntil;

    const params = {
      SpotFleetRequestConfig: spotJson,
    };

    ec2.requestSpotFleet(params, function done(err, data) {
      if (err) {
        reject(err);
        console.log(err);
        return;
      }

      console.log(data);
      resolve(data);
    });
  });
};
