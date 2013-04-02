var exec = require('child_process').exec,
    utils = require('../utils'),
    fs = require('fs');

module.exports = function(options) {
  if (!fs.existsSync(utils.arena())) {
    console.log("can't find arena, please init the project first");
    return;
  } ;
  exec('mocha arena --colors', function(error, stdout, stderr){
    console.log(stdout);
    if(error != null) {
      console.log(stderr)
    }
  });
}
