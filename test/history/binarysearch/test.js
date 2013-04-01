require('should');

var binarysearch = require('./');

describe("binary search", function() {
  var array = [1, 2, 3, 4, 5, 6];
  it("should search in array", function() {
    binarysearch(array, 3).should.be.ok
    binarysearch(array, 6).should.be.ok
    binarysearch(array, 5).should.be.ok
    binarysearch(array, 7).should.not.be.ok
  });
});
