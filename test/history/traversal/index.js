var Node = function(value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
};

var Tree = function(head) {
  this.head = head || new Node(0, null, null);
  this.result = [];
};

Tree.generate = function() {
  var tree = new Tree(new Node(0));

  tree.head.left = new Node(1);
  tree.head.right = new Node(2);
  tree.head.left.left = new Node(3);
  tree.head.left.right = new Node(4);
  tree.head.right.left = new Node(5);
  tree.head.right.right = new Node(6);

  return tree;
};

Tree.prototype.preorder = function(node) {
  if(node == null) return;

  this.result.push(node.value);
  this.preorder(node.left);
  this.preorder(node.right);
};

Tree.prototype.postorder = function(node) {
  if(node == null) return;

  this.postorder(node.left);
  this.postorder(node.right);
  this.result.push(node.value);
};

Tree.prototype.inorder = function(node) {
  if(node == null) return;

  this.inorder(node.left);
  this.result.push(node.value);
  this.inorder(node.right);
};

Tree.prototype.breadthFirst = function() {
  var queue = []
    , node;
  queue.push(this.head);

  while(queue.length) {
    node = queue.shift();
    if (node.left != null) {
      queue.push(node.left);
    };
    if (node.right != null) {
      queue.push(node.right);
    };
    this.result.push(node.value);
  }
}

Tree.prototype.leveling = function() {
  var queue = []
    , levelResult = []
    , level = 0;

  queue.pushElement = function(node, level) {
    if (node == null) return;

    this.push({
      level: level,
      node: node
    });
  }

  queue.pushElement(this.head, 0);

  while(queue.length) {
    var element = queue.shift()
      , node = element.node;

    queue.pushElement(node.left, element.level + 1);
    queue.pushElement(node.right, element.level + 1);

    if (level < element.level) {
      level = element.level;
      this.result.push(levelResult);
      levelResult = [];
    }

    levelResult.push(node.value);
  }

  if(levelResult.length) {
    this.result.push(levelResult);
  }
}

exports.Tree = Tree;
exports.Node = Node;
