var path = require('path'),
    async = require('async'),
    fs = require('fs'),
    request = require('request');

var arena = exports.arena = function (name) {
  name = name || '';
  return path.join(process.cwd(), 'arena', name)
}

var history = exports.history = function (name) {
  name = name || '';
  return path.join(process.cwd(), 'history', name);
}

var local = exports.local = function (name) {
  name = name || '';
  return path.join(process.cwd(), name);
}

exports.copyFileSync = function(srcFile, destFile, encoding) {
  var content = fs.readFileSync(srcFile, encoding);
  fs.writeFileSync(destFile, content, encoding);
}

var sync = exports.sync = function(url, files, callback) {
  async.each(files, function(file, next) {
    request.get(url + '/' + file, function(err, res) {
      if (err || res.statusCode !== 200) {
        return next(new Error('file not found!'));
      }
      fs.writeFile(arena(file), res.body, 'utf8', next);
    });
  }, callback);
}
