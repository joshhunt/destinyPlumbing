const { exec } = require('child_process');

const NODE = process.argv[0];

const processDatabase = require('./dumpMobileWorldContent');
// const processLanguage = require('./processLanguage');

const TASKS = {
  dumpMobileWorldContent() {
    processDatabase(process.env.sqlFile, process.env.lang);
  },

  // processLanguage() {
  //   processLanguage(process.env.lang, process.env.archiveUrl);
  // }
};

module.exports.spawn = (name, args) => {
  return new Promise((resolve, reject) => {
    const cmd = `${NODE} ${__filename}`;

    const env = Object.assign({}, process.env, args, {
      ThreadedTaskName: name,
    });

    const envString = Object.keys(env).map(key => [`${key}=${env[key]}`]).join(' ');
    console.log(`env ${envString} ${cmd}`);

    const p = exec(cmd, { cwd: __dirname, env });

    p.stdout.on('data', process.stdout.write.bind(process.stdout));
    p.stderr.on('data', process.stderr.write.bind(process.stderr));

    p.on('exit', (code) => {
      code === 0 ? resolve() : reject(code);
    });
  });
};

const taskName = process.env.ThreadedTaskName;
if (taskName) {
  TASKS[taskName]();
}
