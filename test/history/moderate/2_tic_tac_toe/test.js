require('should')
var winning = require('./')

describe("tic tak toc", function() {
  var tic;
  beforeEach(function() {
    tic = [
      ['O', 'X', '-'],
      ['O', 'O', '-'],
      ['X', 'X', '-']
    ];
  })
  it("can judge is row winning", function() {
    tic[0][1] = 'O'
    tic[0][2] = 'O'
    winning(tic).should.eql('O');
  });

  it("can judge column is winning", function() {
    tic[2][0] = 'O'
    winning(tic).should.eql('O');

  });

  it.only("can judge diagonoal is winning", function() {
    tic[2][2] = 'O';
    winning(tic).should.eql('O')
  });
});
