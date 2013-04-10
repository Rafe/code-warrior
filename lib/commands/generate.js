var utils = require('../utils'),
    fs = require('fs'),
    path = require('path'),
    read = require('read');

var help = function() {
  console.log("Generate: generate the question skeleton");
  console.log("Usage   : war generate");
}

module.exports = function(options) {
  if (options.help) return help();

  if (options.argv.remain.shift() == 'list') {
    generateList();
    return;
  };

  fs.writeFileSync(utils.local('test.js'),
    'var func = require("./");\n' +
    'var expect = require("expect.js")\n\n' +
    'describe("func", function () {\n' +

    '});'
  );
  fs.writeFileSync(utils.local('index.js'), 'module.exports = function () {\n}');

  read({ prompt: "id :"}, function(err, id) {
    read({ prompt: "question name :"}, function(err, name) {
      read({ prompt: "level [basic, moderate, hard] :"}, function(err, level) {
        read({ prompt: "author :"}, function(err, author) {

          fs.writeFileSync(utils.local('readme.md'),
            '#' + name + '\n\n' +
            '##Powered by [CodeWarrior](http://code-warrior.herokuapp.com)');

          var json = {
            id: parseInt(id),
            name: name,
            level: level,
            author: author
          }

          fs.writeFileSync(utils.local('package.json'), JSON.stringify(json, null, 2),'utf8');
        })
      })
    })
  })
}

var generateList = function() {
  var dir = process.cwd()
  var levelList = fs.readdirSync(dir);
  var list = {};

  levelList.forEach(function(level) {
    var levelpath = path.join(dir, level);
    var stat = fs.statSync(levelpath);

    if (stat.isDirectory()) {
      list[level] = {}

      var questions = fs.readdirSync(levelpath);

      questions.forEach(function(question) {
        var qpath = path.join(levelpath, question);
        var meta = require(path.join(qpath, 'package.json'));
        if (meta) {
          list[level][meta.id] = meta.name;
        }
      });
    };
  });
  console.log('generated list:');
  console.log(list);
  fs.writeFileSync(path.join(dir, 'list.json'), JSON.stringify(list, null, 2), 'utf8');
}
