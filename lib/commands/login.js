var Github = require('github'),
    read = require('read'),
    request = require('request'),
    utils = require('../utils'),
    fs = require('fs');

var help = function() {
  console.log("login : login by github account");
  console.log("Usage : war login");
}

module.exports = function(options) {
  if (options.help) return help();

  var url = options.url;

  var github = new Github({
    version: "3.0.0",
    timeout: 5000
  });

  console.log('Login on github:');
  read({ prompt: "Github account:"}, function(err, username) {
    read({ prompt: "Github password:", silent: true }, function(err, password) {
      github.authenticate({
        type: "basic",
        "username": username,
        "password": password
      });

      github.authorization.create({ scopes: ['gist'] }, function (err, res) {
        if (err || !res) {
          return console.log('login failed, please check your github username and password is correct');
        };
        var token = res.token;
        github.user.get({ username: username }, function (err, user){
          request.post(url + '/auth', {
            'json': {
              username: user.id,
              password: token
            }
          }, function (err, res) {
            if (err) {
              console.log(err);
              console.log('login failed');
              return;
            };
            var cookies = res.headers['set-cookie'] || [''];
            var config = {
              "id": user.id,
              "token": token,
              "cookie": cookies[0]
            }
            fs.writeFileSync(utils.local('/.config.json'), JSON.stringify(config, null, 2));
            console.log('login completed');
            process.exit();
          });
        });
      });
    });
  });
}
