var win;
var diagonal = '', reverse = '';
module.exports = function(tic) {
  for (var i = 0; i < tic.length; i++) {
    var row = '', column = ''
    for (var j = 0; j < tic.length; j++) {
      row += tic[j][i];
      column += tic[i][j]
    };

    var results = [row, column];
    for (var m = 0; m < results.length; m++) {
      win = checkLine(results[m]);
      if (win) return win;
    };

    diagonal += tic[i][i];
    reverse += tic[i][tic.length - 1 - i];
  };

  var results = [diagonal, reverse];
  for (var i = 0; i < results.length; i++) {
    win = checkLine(results[i]);
    if (win) return win;
  };
  return ''
}

var checkLine = function(line) {
  if (line == 'OOO') {
    return 'O'
  } else if (line == 'XXX') {
    return 'X'
  }
  return null
}
