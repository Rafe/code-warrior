var utils = require('../utils'),
    request = require('request'),
    path = require('path'),
    fs = require('fs'),
    async =require('async');

module.exports = function(options) {
  var url = options.url,
      package = require(utils.local('/package.json')),
      level = options.level,
      id = options.stage;

  request.post(url + '/new', {
      'json': {
        "level": level,
        "id": id,
        "user": package.id
      }
    }, function(err, res) {

    if (err) {
      console.log(err.message);
      return;
    };

    if (res.statusCode !== 200) {
      console.log(res.body);
      return;
    };

    console.log(res.body)
    id = res.body.id;
    level = res.body.level;
    baseUrl = url + path.join('/questions', level, id.toString());
    sync(baseUrl, ['index.js', 'test.js', 'readme.md', 'package.json'], function(err) {
      if (err) return console.log(err.message);
      welcome();
    });
  })
}

var welcome = function() {
  var meta = require(utils.arena('package.json'));
  console.log('=====HERE COMES NEW CHALLENGER=====')
  console.log('level: ' + meta.level);
  console.log('name: ' + meta.name);
  console.log('========CAN YOU SOLVE THIS?========');
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
