var utils = require('../utils'),
    fs = require('fs'),
    read = require('read');

var help = function() {
  console.log("Generate: generate the question skeleton");
  console.log("Usage   : war generate");
}

module.exports = function(options) {
  if (options.help) return help();

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
