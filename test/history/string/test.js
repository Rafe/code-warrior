require('should');

var test = require('./').test;

var anagrams = require('./').anagrams

describe("string", function() {
  it("should have apis", function() {
    test();
  });
});

describe("anagrams", function() {
  it("should return anagrams", function() {
    anagrams('jimmy', 'mimjy').should.be.ok
  });
});
