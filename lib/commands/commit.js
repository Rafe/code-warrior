var request = require('request'),
    fs = require('fs'),
    utils = require('../utils'),
    mkdirp = require('mkdirp'),
    slug = require('slug'),
    Github = require('github'),
    read = require('read');

module.exports = function(options) {
  if (!fs.existsSync(utils.arena('index.js')) || !fs.existsSync(utils.arena('test.js'))) {
    console.log('no file');
    return;
  }

  var package = require(utils.local('/package.json')),
      code = fs.readFileSync(utils.arena('index.js'), 'utf8'),
      test = fs.readFileSync(utils.arena('test.js'), 'utf8'),
      meta = require(utils.arena('package.json')),
      url = options.url;

  request.post(url + '/commit',
    {
      'json': {
        'code': code,
        'test': test,
        'level': meta.level,
        'name': meta.name,
        'id': meta.id,
        'user': package.id
      },
      'headers': {
        'Cookie': package.cookie
      }
    }, function(err, res) {
      if(err) {
        console.log(err.message);
        return
      }
      if(!res.body.success) {
        console.log('YOU SHOULD NOT PASS');
        return;
      }

      console.log("=====CHALLANGE COMPLETE!!!=====");
      console.log("=====YOU GAIN " + res.body.point + " points=======");
      console.log("===============================");

      read({prompt: 'share your solution to github:gist? (yes/no)'}, function(err, answer) {
        if(answer.toLowerCase() == 'y' || answer.toLowerCase() == 'yes') {
          uploadGist(meta, package, function(err, res) {
            if(err) return;
            var gist = res.html_url;
            clearArena(meta, package, function() {
              request.post(url + '/commit/gist', {
                'json': {
                  'user': package.id,
                  'gist': gist
                }
              }, function() {
                console.log('upload complete');
              });
            });
          });
        } else {
          clearArena(meta, package);
        }
      });
  });
}

var clearArena = function(meta, package, callback) {
  var dir = utils.history(meta.level + '/' + slug(meta.name));
  mkdirp(dir, function (err) {
    utils.copyFileSync(utils.arena('index.js'), dir + '/index.js', 'utf8');
    utils.copyFileSync(utils.arena('test.js'), dir + '/test.js');
    utils.copyFileSync(utils.arena('readme.md'), dir + '/readme.md');

    package.level[meta.level].push(meta.id);
    fs.writeFileSync(utils.local('/package.json'), JSON.stringify(package, null, 2));
    if (callback) {
      callback(err);
    };
  });
}

var uploadGist = function(meta, package, callback) {
  var github = new Github({ version: "3.0.0" });
  github.authenticate({
    type: "oauth",
    token: package.token
  });

  github.gists.create({
    description: 'Solving ' + meta.name +' problem from http://code-warrior.herokuapp.com.',
    public: true,
    'files': {
      'readme.md': {
        content: fs.readFileSync(utils.arena('readme.md'), 'utf8')
      },
      'index.js': {
        content: fs.readFileSync(utils.arena('index.js'), 'utf8')
      },
      'test.js': {
        content: fs.readFileSync(utils.arena('test.js'), 'utf8')
      },
      'package.json': {
        content: fs.readFileSync(utils.arena('package.json'), 'utf8')
      }
    }
  }, callback);
}
