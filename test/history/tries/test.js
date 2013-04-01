require('should');

var func = require('./'),
    util = require('util');

describe("question", function() {
  it("can generate trie", function() {
    var trie = func('this is a tes test'.split(' '));
    trie.should.be.ok
  });

  it("should add 0 in end of the word", function() {
    var trie = func('this is a test'.split(' '));
    trie.a.should.eql(0);
  });

  it("should add $:0 if other word exist", function() {
    var trie = func('t te'.split(' '));
    trie.t['$'].should.eql(0);
  });
});
