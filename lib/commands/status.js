var exec = require('child_process').exec,
    utils = require('../utils');

var help = function() {
  console.log('status: open status page on code warrior');
  console.log('Usage : war status');
}

module.exports = function(options) {
  if (options.help) return help();

  var userId = require(utils.local('package.json')).id;
  exec('open ' + options.url + '/users/' + userId, function(error, stdout, stderr){
    console.log(stdout);
  });
}
