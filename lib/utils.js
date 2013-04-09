var path = require('path'),
    async = require('async'),
    fs = require('fs');

exports.arena = function (name) {
  name = name || '';
  return path.join(process.cwd(), 'arena', name)
}

exports.history = function (name) {
  name = name || '';
  return path.join(process.cwd(), 'history', name);
}

exports.local = function (name) {
  name = name || '';
  return path.join(process.cwd(), name);
}

exports.copyFileSync = function(srcFile, destFile, encoding) {
  var content = fs.readFileSync(srcFile, encoding);
  fs.writeFileSync(destFile, content, encoding);
}
