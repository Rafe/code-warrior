var quicksort = function(array) {
  return sort(array, 0, array.length - 1);
}

var swap = function(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
var sort = function(array, start, end) {
  var i, j;
  if(end <= start) return array;

  var pivot = array[Math.floor((start + end ) / 2)];
  for(i = start, j = end; i < j;) {
    for(; array[i] < pivot; i++){}
    for(; array[j] > pivot; j--){}
    if ( i >= j) break;
    swap(array, i, j);
  }
  sort(array, start, i - 1);
  sort(array, j + 1, end);

  return array;
}

module.exports = quicksort;
