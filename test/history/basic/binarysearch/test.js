var expect = require('expect.js');

var binarysearch = require('./');

describe("binary search", function() {
  var array = [1, 2, 3, 4, 5, 6];
  it("should search in array", function() {
    expect(binarysearch(array, 3)).to.be.ok()
    expect(binarysearch(array, 5)).to.be.ok()
    expect(binarysearch(array, 6)).to.be.ok()
    expect(binarysearch(array, 7)).to.not.be.ok()
  });
});
