var mergesort = function(array) {
  if (array.length <= 1) return array;
  var mid = Math.floor(array.length / 2);
  return merge(mergesort(array.slice(0, mid)), mergesort(array.slice(mid, array.length)));
}

var merge = function(a, b) {
  var merged = [];
  while(a.length > 0 && b.length > 0) {
    if (a[0] >= b[0]) {
      merged.push(b.shift());
    } else {
      merged.push(a.shift());
    };
  }

  return merged.concat(a, b);
}

module.exports = mergesort;
