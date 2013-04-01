require('should');

var zero = require('./');

describe("zero", function() {
  it("can count zero", function() {
    zero(5).should.eql(1);
  });
});
