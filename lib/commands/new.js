var utils = require('../utils'),
    request = require('request'),
    path = require('path'),
    fs = require('fs'),
    async =require('async');

module.exports = function(options) {
  var url = options.url,
      package = require(utils.local('/package.json')),
      level = options.argv.level || 'basic';
      next = options.stage || package["level"][level].length + 1,
      baseUrl = url + path.join('/questions', level, next.toString());

  sync(baseUrl, ['index.js', 'test.js', 'readme.md', 'package.json'], function(err) {
    if (err) return console.log(err.message);

    var meta = require(utils.arena('package.json'));
    console.log('=====HERE COMES NEW CHALLENGER=====')
    console.log('level: ' + meta.level);
    console.log('name: ' + meta.name);
    console.log('========CAN YOU SOLVE THIS?========');
  });
}

var sync = function(url, files, callback) {
  async.each(files, function(file, next) {
    request.get(url + '/' + file, function(err, res) {
      if (err || res.statusCode !== 200) {
        return next(new Error('file not found!'));
      }
      fs.writeFile(utils.arena(file), res.body, 'utf8', next);
    });
  }, callback);
}
