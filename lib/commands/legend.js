var read = require('read');

module.exports = function(options) {
  console.log('Legend is a customize interview command')
  read({prompt: 'please enter the four digits of interview code: '}, function(err, code) {
    console.log('sorry, the code does not existed');
  })
}
