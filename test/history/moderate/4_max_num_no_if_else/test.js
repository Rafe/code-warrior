require('should');

var count = require('./');

describe("count", function() {

  it("can count max of two number", function() {
    count(5, 10).should.eql(10);
  });

  it("can count max of two number 2", function() {
    count(12314, 51231).should.eql(51231);
  });
});
