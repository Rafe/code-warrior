var fs = require('fs'),
    utils = require('../utils');

module.exports = function(options) {

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
      "expect": "*"
    },
    "level": {
      "basic": [],
      "moderate": [],
      "hard": []
    }
  }
  fs.writeFileSync('package.json', JSON.stringify(package, null, 2));
}
