require('should');

var swap = require('./');

describe("swap", function() {
  it("can swap without varible", function() {
    var array = [1, 2]
    swap(array, 0, 1);
    array[0].should.eql(2);
    array[1].should.eql(1);
  });

  it("can swap big numbers", function() {
    var array = [1234, 4321]
    swap(array, 0, 1);
    array[0].should.eql(4321);
    array[1].should.eql(1234);

  });
});
