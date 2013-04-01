require('should');

var heapsort = require('./');

describe("heapsort", function() {
  var array;
  beforeEach(function() {
    array = [ 6, 4, 2, 3, 1, 5 ];
  });

  it("can sort", function() {
    heapsort(array).should.eql([ 1, 2, 3, 4, 5, 6]);
  });
});
