var Github = require('github'),
    read = require('read'),
    request = require('request'),
    utils = require('../utils');

module.exports = function(options) {
  var url = options.url;

  var github = new Github({
    version: "3.0.0",
    timeout: 5000
  });

  read({ prompt: "username:"}, function(err, username) {
    read({ prompt: "password:", silent: true }, function(err, password) {
      github.authenticate({
        type: "basic",
        "username": username,
        "password": password
      });

      github.authorization.create({}, function (err, res) {
        github.user.get({username: 'Rafe'}, function (err, user){
          request.post(url + '/auth', {
            'json': {
              username: user.id,
              password: res.token
            }
          }, function (err, res) {
            var package = require(utils.local('/package.json'));
            package.id = user.id;
            package.token = res.token;
            package.cookie = res.headers['set-cookie'][0];
            fs.writeFileSync(utils.local('/package.json'), JSON.stringify(package, null, 2));
            console.log('login complete');
            process.exit();
          });
        });
      });
    });
  });

}
