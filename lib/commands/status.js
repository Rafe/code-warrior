var exec = require('child_process').exec,
    utils = require('../utils');

module.exports = function(options) {
  var userId = require(utils.local('package.json')).id;
  exec('open ' + options.url + '/users/' + userId, function(error, stdout, stderr){
    console.log(stdout);
  });
}
