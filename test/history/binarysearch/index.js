var binarysearch = function(array, element) {
  var left = 0
    , right = array.length - 1;

  while ( left <= right ) {
    var mid = Math.floor((left + right) / 2);

    if (element > array[mid]) {
      left = mid + 1;
    } else if (element < array[mid]) {
      right = mid - 1;
    } else {
      return true;
    };
  }

  return false;
}

module.exports = binarysearch;


