var fs = require('fs'),
    utils = require('../utils');
    exec = require('child_process').exec,
    print = require('util').print,
    login = require('./login');

var help = function() {
  console.log("Init  : initiate project directories");
  console.log("Usage : war init");
}

module.exports = function(options) {
  if (options.help) return help();

  if(!fs.existsSync(utils.arena())) {
    fs.mkdirSync(utils.arena());
  }

  if(!fs.existsSync(utils.history())) {
    fs.mkdirSync(utils.history());
  }

  var package = {
    "name": "code-warrior-local",
    "dependencies": {
      "mocha": "*",
      "expect.js": "*"
    }
  }
  fs.writeFileSync('package.json', JSON.stringify(package, null, 2));
  fs.writeFileSync('.config.json', "{}");
  fs.writeFileSync('.gitignore', ".config.json");
  console.log('init project completed');
  exec('npm install', function(err, stdout, stderr) {
    print(stdout);
    console.log('install npm packages completed');
    login(options);
  });
}
