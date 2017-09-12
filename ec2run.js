const { notify } = require('./utils');
const downloadAndProcess = require('./downloadAndProcess');

notify('destiny.plumbing is running via ec2run');

downloadAndProcess()
  .then(() => {
    notify('destiny.plumbing successfully finished');
  })
  .catch(err => {
    const msg = err.message || err.msg || err.toString();
    console.error(err);
    notify(`destiny.plumbing died with error: ${msg}`);
  });

process.on('unhandledRejection', function(reason, p) {
  console.log(
    'Possibly Unhandled Rejection at: Promise ',
    p,
    ' reason: ',
    reason
  );
  console.log(reason);
  console.log(p);
});
