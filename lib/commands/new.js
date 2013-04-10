var utils = require('../utils'),
    request = require('request'),
    path = require('path'),
    fs = require('fs'),
    async =require('async');

var help = function() {
  console.log("new : download new algorithm question from code-warrior");
  console.log("Usage : war new [--level [basic|moderate|hard] --stage [id]]");
  console.log("Example: war new              #download next unanswered basic question");
  console.log("         war new -l moderate  #download next moderate question");
  console.log("         war new -l hard -s 5 #download hard question with id 5");
  console.log("Also, check question list by : war list");
}

module.exports = function(options) {
  if (options.help) return help();

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
