const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(rootTree=null) {
    this.rootTree = rootTree;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    if(this.rootTree === null) {
      this.rootTree = new Node(data);
    }else{
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else {
            return searchTree(node.right);
          }
        }
      }
      return searchTree(this.rootTree);
    }
  }


  has(data) {
    return searchWithin(this.rootTree,data);

    function searchWithin(currentNode,data){
      if(!currentNode){
        return false;
      }
      if(currentNode.data == data){
        return true;
      }
      return data < currentNode.data ?
      searchWithin(currentNode.left,data):
      searchWithin(currentNode.right,data);
    }
  }

  find(data) {
    let currentNode = this.rootTree;

    while (currentNode && currentNode.data !== data) {
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  remove(data) {
    this.rootTree= removeNode(this.rootTree,data);

    function removeNode(currentNode,data){
      if(!currentNode){
       return null;
      }
      if(data<currentNode.data){
        currentNode.left = removeNode(currentNode.left,data);
        return currentNode;
      }else if(data>currentNode.data){
        currentNode.right = removeNode(currentNode.right,data);
        return currentNode;
      }else{
        if(!currentNode.left && !currentNode.right){
          return null;
        }
        if(!currentNode.left){
          currentNode = currentNode.right;
          return currentNode;
        }
        if(!currentNode.right){
          currentNode = currentNode.left;
          return currentNode;
        }

        let minRigthNode = currentNode.right;
        while(minRigthNode.left){
          minRigthNode = minRigthNode.left;
        }
        currentNode.data = minRigthNode.data;
        currentNode.right = removeNode(currentNode.right,minRigthNode.data);
        return currentNode;
      }
    }
  }

  min() {
    let currentNodethis = this.rootTree;
    while (currentNodethis.left !== null) {
      currentNodethis = currentNodethis.left;
    }
    return currentNodethis.data;
  }

  max() {
    let currentNodethat = this.rootTree;
    while (currentNodethat.right !== null) {
      currentNodethat = currentNodethat.right;
    }
    return currentNodethat.data;
  }
}

module.exports = {
  BinarySearchTree
};