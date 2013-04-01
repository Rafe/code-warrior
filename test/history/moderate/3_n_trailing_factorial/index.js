module.exports = function(n) {
  var twos = 0, fives = 0;
  for (var i = 1; i <= n; i++) {
    if ((i % 2) === 0) twos++;
    if ((i % 5) === 0) fives++;
  }
  return Math.min(twos, fives);
}
