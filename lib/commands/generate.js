var utils = require('../utils'),
    fs = require('fs');

module.exports = function(options) {
  fs.writeFileSync(utils.local('test.js'),
    'var func = require("./");\n' +
    'var expect = require("expect.js")\n\n' +
    'describe("func", function () {\n' +

    '});'
  );
  fs.writeFileSync(utils.local('index.js'), 'module.exports = function () {\n}');
  fs.writeFileSync(utils.local('readme.md'), '');

  var json = {
    id: '',
    name: '',
    level: 'basic',
    author: '',
  }

  fs.writeFileSync(utils.local('package.json'), JSON.stringify(json, null, 2),'utf8');
}
