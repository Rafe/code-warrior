var exec = require('child_process').exec,
    utils = require('../utils'),
    fs = require('fs');

var help = function() {
  console.log("test  : run test cases");
  console.log("Usage  : war test");
  console.log("equal to: mocha arena/test.js");
}

module.exports = function(options) {
  if (options.help) return help();

  if (!fs.existsSync(utils.arena())) {
    console.log("can't find arena, please init the project first");
    return;
  };
  exec('mocha arena --colors', function(error, stdout, stderr){
    console.log(stdout);
    if(error != null) {
      console.log(stderr)
    }
  });
}
