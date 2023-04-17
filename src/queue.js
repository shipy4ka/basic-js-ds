const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {

  getUnderlyingList() {
    return this.List;
  }

  enqueue(value) {
    if(!this.List){
      this.List = new ListNode(value);
    }else{
      let lastNode = this.List;
      while(lastNode.next){
        lastNode = lastNode.next;
      }
      lastNode.next = new ListNode(value);
    }
  }

  dequeue() {
    let value = this.List.value;
    this.List = this.List.next;
    return value;
  }
}

module.exports = {
  Queue
};
