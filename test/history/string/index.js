
exports.test = function() {
  var str = 'this is a test';
  console.log(str.length);

  console.log(str.match('this'));

  console.log(str.replace(/t/gi, '%'));

}


exports.anagrams = function(str, target) {
  var count = {};
  str.split('').forEach(function(char) {
    if (char in count) {
      count[char] += 1;
    } else {
      count[char] = 1;
    };
  })

  var count2 = {}
  target.split('').forEach(function(char) {
    if (char in count2) {
      count2[char] += 1;
    } else {
      count2[char] = 1;
    };
  })

  var keys = Object.keys(count);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (count[key] != count2[key]) return false;

    return true;
  };

}
