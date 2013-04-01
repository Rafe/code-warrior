var path = require('path'),
    async = require('async');

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
