var expect = require('expect.js');

var fab = require('./');

describe("fabonacci", function() {
  it("should calculate fabonacci numbers", function() {
    expect(fab(6)).to.eql(8)
  });

  it("should fast enough to run big number", function(done) {
    setTimeout(function() {
      fab(1000);
      done()
    });
  });
});
