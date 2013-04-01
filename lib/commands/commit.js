var request = require('request'),
    fs = require('fs'),
    utils = require('../utils'),
    mkdirp = require('mkdirp');

module.exports = function(options) {
  if (!fs.existsSync(utils.arena('index.js')) || !fs.existsSync(utils.arena('test.js'))) {
    console.log('no file');
    return;
  }

  var package = require(utils.local('/package.json')),
      code = fs.readFileSync(utils.arena('index.js'), 'utf8'),
      test = fs.readFileSync(utils.arena('test.js'), 'utf8'),
      meta = require(utils.arena('package.json')),
      url = options.url,
      dir = utils.history(meta.level + '/' + meta.name);

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

      mkdirp(dir, function () {
        fs.renameSync(utils.arena('index.js'), dir + '/index.js');
        fs.renameSync(utils.arena('test.js'), dir + '/test.js');
        fs.renameSync(utils.arena('readme.md'), dir + '/readme.md');
        fs.unlinkSync(utils.arena('package.json'));

        package.level[meta.level].push(meta.id);
        fs.writeFileSync(utils.local('/package.json'), JSON.stringify(package, null, 2));
      });
  });
}
