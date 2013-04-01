var exec = require('child_process').exec

module.exports = function(options) {
  exec('mocha arena --colors', function(error, stdout, stderr){
    console.log(stdout);
    if(error != null) {
      console.log(stderr)
    }
  });
}
