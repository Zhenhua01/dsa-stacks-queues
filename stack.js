"use strict";
/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  constructor() {
    this._array = [];
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {

    // let newNode = new Node(val);
    // if (this.size === 0) {
    //   this.top = newNode;
    //   this.size++;
    // } else {
    //   newNode.next = this.top;
    //   this.top = newNode;
    //   this.size++;
    // }

    let newNode = new Node(val);
    newNode.next = this.top;
    this._array.push(newNode);
    this.size++;
    this.top = newNode;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // if (this.size === 0) throw new Error;
    // let removed = this.top;

    // if (this.size !== 1) {
    //   this.top = this.top.next;
    // } else {
    //   this.top = null;
    // }
    // this.size--;
    // return removed.val;

    let removed = this._array.pop();
    this.top = this._array[this.size - 1];
    this.size--;
    
    return removed.val;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if (this.size === 0) throw new Error;

    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Stack;
