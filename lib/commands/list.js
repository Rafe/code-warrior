var request = require('request');

var help = function() {
  console.log("list  : list all questions");
  console.log("Usage : war list");
}

module.exports = function(options) {
  if (options.help) return help();

  request.get(options.url + '/list', function(err, res) {
    if (err) {
      console.log(err.message);
      return;
    };

    console.log(JSON.parse(res.body));
  });
}
