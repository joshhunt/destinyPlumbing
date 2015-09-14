import jsonfile from 'jsonfile';

let dataStore;
let filepath;

module.exports.start = function(_filepath) {
    filepath = _filepath;
    dataStore = jsonfile.readFileSync(filepath, {throws:false}) || {}
    return dataStore;
};

module.exports.get = function(param) {
    return dataStore[param];
}

module.exports.set = function(param, value) {
    dataStore[param] = value;
    jsonfile.writeFile(filepath, dataStore, (err) => {
        if (!err) { return };
        throw err;
    });
}