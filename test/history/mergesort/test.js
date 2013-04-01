require('should');

var mergesort = require('./');

describe("mergesort", function() {
  it("can sort array", function() {
    var array = [4, 3, 5, 1, 2, 6];
    mergesort(array)
      .should.eql([1, 2, 3, 4, 5, 6]);
  });
});
