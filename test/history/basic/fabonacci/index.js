var cache = {}

var fabonacci = function(n) {
  if (n <= 0 ) return 0
  if (n === 1 ) return 1;
  if (cache[n] == null) {
    cache[n] = fabonacci(n - 1) + fabonacci(n - 2);
  }

  return cache[n]
}

module.exports = fabonacci;
