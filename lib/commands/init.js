var fs = require('fs'),
    utils = require('../utils');

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
}
