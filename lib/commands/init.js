var fs = require('fs'),
    utils = require('../utils');

module.exports = function(options) {

  if(!fs.existsSync(utils.arena())) {
    fs.mkdirSync(utils.arena());
  }

  if(!fs.existsSync(utils.history())) {
    fs.mkdirSync(utils.history());
  }

  var package = fs.readFileSync(utils.local('/package.json'));
  fs.writeFileSync('package.json', package);

}
