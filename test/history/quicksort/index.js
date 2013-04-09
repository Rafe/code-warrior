var quicksort = function(array) {
  return sort(array, 0, array.length - 1);
}

var swap = function(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

var sort = function(array, start, end) {
  if (end <= start) return array;

  var left = start,
      right = end,
      pivot = array[Math.floor((start + end) / 2)];

  //detail is king

  while (left < right) {
    while(array[left] < pivot) left++;
    while(array[right] > pivot) right--;
    if (left >= right) break;
    swap(array, left, right);
  }

  console.log(left, right, array)
  sort(array, start, right - 1);
  sort(array, left + 1, end);

  return array;
}

module.exports = quicksort;
