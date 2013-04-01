require('should');

var Tree = require('./').Tree;
var Node = require('./').Node;

describe("tree traversal", function() {
  var tree;

  beforeEach(function() {
    tree = Tree.generate();
  });

  describe("can traverse depth first", function() {
    it("preorder", function() {
      tree.preorder(tree.head);
      tree.result.should.eql([0, 1, 3, 4, 2, 5, 6]);
    });

    it("postorder", function() {
      tree.postorder(tree.head);
      tree.result.should.eql([3, 4, 1, 5, 6, 2, 0]);
    });

    it("inorder", function() {
      tree.inorder(tree.head);
      tree.result.should.eql([3, 1, 4, 0, 5, 2, 6]);
    });
  });

  it("can traverse breadth first", function() {
    tree.breadthFirst();
    tree.result.should.eql([0, 1, 2, 3, 4, 5, 6]);
  });

  it("can traverse breadth with leveling", function() {
    tree.leveling();
    tree.result.should.eql([[0], [1, 2], [3, 4, 5, 6]]);
  });

});
