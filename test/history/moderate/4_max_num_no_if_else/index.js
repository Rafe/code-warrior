module.exports = function(a, b) {
  var diff = a - b;
  var k = diff >> 31;
  return a + k * diff;
}
