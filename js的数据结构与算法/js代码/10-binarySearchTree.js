function BinarySerachTree() {
  this.root = null

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  BinarySerachTree.prototype.insert = function(key) {
    var newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  BinarySerachTree.prototype.insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  BinarySerachTree.prototype.preOrderTraversal = function(handler) {
    this.preOrderTraversalNode(this.root, handler)
  }

  BinarySerachTree.prototype.preOrderTraversalNode = function(node, handler) {
    if (node !== null) {
      handler(node.key)
      this.preOrderTraversalNode(node.left, handler)
      this.preOrderTraversalNode(node.right, handler)
    }
  }

  BinarySerachTree.prototype.postOrderTraversal = function(handler) {
    this.postOrderTraversalNode(this.root, handler)
  }

  BinarySerachTree.prototype.postOrderTraversalNode = function(node, handler) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, handler)
      this.postOrderTraversalNode(node.right, handler)
      handler(node.key)
    }
  }

  BinarySerachTree.prototype.midOrderTraversal = function(handler) {
    this.midOrderTraversalNode(this.root, handler)
  }

  BinarySerachTree.prototype.midOrderTraversalNode = function(node, handler) {
    if (node !== null) {
      this.midOrderTraversalNode(node.left, handler)
      handler(node.key)
      this.midOrderTraversalNode(node.right, handler)
    }
  }

  BinarySerachTree.prototype.min = function() {
    var current = this.root
    while(current.left !== null) {
      current = current.left
    }
    return current.key
  }

  BinarySerachTree.prototype.max = function() {
    var current = this.root
    while(current.right !== null) {
      current = current.right
    }
    return current.key
  }

  BinarySerachTree.prototype.search = function(key) {
    var node = this.root
    while(node) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  BinarySerachTree.prototype.delete = function(key) {
    var node = this.root
    var parentNode
    var isLeft = true

    while(node.key !== key) {
      parentNode = node
      if (key < node.key) {
        node = node.left
        isLeft = true
      } else if (key > node.key) {
        node = node.right
        isLeft = false
      } 

      if (node === null) return false
    }
    
    if (node.left === null && node.right === null) { // 1. 该节点是叶节点
      if(isLeft) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
    } else if (node.left === null) { // 2. 该节点只有一个子节点
      if (node === this.root) {
        this.root = node.right
      } else if (isLeft) {
        parentNode.left = node.right
      } else {
        parentNode.right = node.right
      }
    } else if (node.right === null) { 
      if (node === this.root) {
        this.root = node.left
      } else if (isLeft) {
        parentNode.left = node.left
      } else {
        parentNode.right = node.left
      }
    } else { // 3. 该节点有两个子节点 
      var successor = this.getSuccessor(node)
      if (node === this.root) {
        this.root = successor
      }
      if (isLeft) {
        parentNode.left = successor
      } else {
        parentNode.right = successor
      }
      successor.left = node.left
    }
    return true
  }

  // 获取后继节点
  BinarySerachTree.prototype.getSuccessor = function(delNode) {
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right
    while(current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    console.log(successor)
    console.log(successorParent)
    if (delNode !== successorParent) {
      
      successorParent.left = successor.right
      successor.right = delNode.right
    }

    console.log(successor)
    return successor
  }
}

var bst = new BinarySerachTree()
bst.insert(11)
bst.insert(8)
bst.insert(6)
bst.insert(2)
bst.insert(15)
bst.insert(24)
bst.insert(12)
bst.insert(7)
bst.insert(10)
var preStr = ""
bst.preOrderTraversal(function(value) {
  preStr += value + " "
})
console.log(preStr)

var postStr = ""
bst.postOrderTraversal(function(value) {
  postStr += value + " "
})
console.log(postStr)

var midStr = ""
bst.midOrderTraversal(function(value) {
  midStr += value + " "
})
console.log(midStr)

console.log(bst.min())
console.log(bst.max())

console.log(bst.search(8))
console.log(bst.search(25))

console.log(bst.delete(6))
var preStr = ""
bst.preOrderTraversal(function(value) {
  preStr += value + " "
})
console.log(preStr)

bst.insert(6)
console.log(bst.delete(8))
var preStr = ""
bst.preOrderTraversal(function(value) {
  preStr += value + " "
})
console.log(preStr)