var generateTrie =  function(words) {
  var trie = {};
  words.forEach(function(word) {
    var letters = word.split('')
      , current = trie;

    letters.forEach(function(letter, i) {
      var position = current[letter];

      if (position == null) {
        current[letter] = (i === letters.length - 1) ? 0 : {};
        current = current[letter];
      } else if (position === 0) {
        current = current[letter] = { $: 0 };
      } else {
        current = current[letter];
      }
    });
  });
  return trie
}

module.exports = generateTrie;
