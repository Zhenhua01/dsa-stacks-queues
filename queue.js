"use strict";

const LinkedList = require("./linked-list");

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  _list = new LinkedList();

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    // if (this.first === null) {
    //   this.first = newNode;
    //   this.last = newNode;
    //   this.size++;
    // } else {
    //   this.last.next = newNode;
    //   this.last = newNode;
    //   this.size++;
    // }

    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // if (this.size === 0) throw new Error;

    // let removed = this.first;

    // if (this.size !== 1) {
    //   this.first = this.first.next;
    // } else {
    //   this.first = null;
    //   this.last = null;
    // }

    // this.size--;

    // return removed.val;

    const removed = this._list.shift();
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size = this._list.length;

    return removed;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) throw new Error;

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
