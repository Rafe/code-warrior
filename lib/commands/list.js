var request = require('request');

module.exports = function(options) {
  request.get(options.url + '/list', function(err, res) {
    if (err) {
      console.log(err.message);
      return;
    };

    console.log(JSON.parse(res.body));
  });
}
