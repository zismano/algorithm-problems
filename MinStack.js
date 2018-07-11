/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.head = null;
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let newNode = {
    value: x,
    next: null
  }
  
  if (this.head) {
    newNode.next = this.head;
    this.head = newNode;
    this.min.push(x);
    this.min.sort((a, b) => a - b);
  } else {
    this.head = newNode;
    this.min.push(x);
  } 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let poppedNodeValue;
    if (this.head.value && !this.head.next) {   // one node in stack
        poppedNodeValue = this.min.shift();       
        this.head = null;
        this.min = [];
    } else {
        poppedNodeValue = this.head.value;  // more than one node in stack
        this.head = this.head.next;
        const poppedValueIndex = this.min.indexOf(poppedNodeValue);
        this.min.splice(poppedValueIndex, 1);
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.value;    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[0];    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */