require('should');
var quicksort = require('./');

describe("quicksort", function() {
  it("should able to sort", function() {
    quicksort([4, 5, 2, 3, 6, 1]).should.eql([1,2,3,4,5,6]);
  });

  it("should able to sort big", function() {
    quicksort([41, 24, 76, 11, 45, 64, 21, 69, 19, 36])
      .should.eql([11, 19, 21, 24, 36, 41, 45, 64, 69, 76]);
  });
});
