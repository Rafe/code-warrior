var read = require('read'),
    utils = require('../utils'),
    request = require('request');

module.exports = function(options) {
  var url = options.url,
      package = require(utils.local('/package.json')),
      config = require(utils.local('.config.json'))

  console.log('Legend is a customize interview command')
  read({prompt: 'please enter the four digits of interview code: '}, function(err, code) {
    request.post(url + '/api/legend', {
      'json': {
        "code": code
      }
    }, function(err, res) {
      if (err || (res.statusCode !== 200)) {
        return console.log(res.body);
      };
      var address = res.body.url
      utils.sync(address, ['index.js', 'test.js', 'readme.md', 'package.json'], function(res) {
        if (err) return console.log(err.message);
        console.log('question downloaded');
      });
    });
  });
}
