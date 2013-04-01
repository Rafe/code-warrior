var buildHeap = function(array) {
  var current
    , parent;

  for (var i = 0; i < array.length; i++) {
    current = i;
    parent = Math.floor(i / 2);
    while ( current >= 1 && array[parent] > array[current]){
      var temp = array[current];
      array[current] = array[parent];
      array[parent] = temp;

      current = parent;
      parent = Math.floor( current / 2);
    }
  };
  return array;
}

var heapsort = function(array) {
  return buildHeap(array);
}



module.exports = heapsort;
