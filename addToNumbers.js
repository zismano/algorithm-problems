/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
      this.val = val;
      this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    const num1 = getNumFromList(l1);
    const num2 = getNumFromList(l2);
    const sum = num1 + num2;
    return getListFromNum(sum);
};

var getNumFromList = function(list) {
    let multiplier = 1;
    let num = 0;
    while (list) {
        num = num + list.val * multiplier;
        multiplier *= 10;
        list = list.next;
    }
    return num;
}

var getListFromNum = function(num) {
    // let result = new ListNode();
    // let reversedNum = num.toString().split('').reverse();
    // let firstNode = new ListNode(reversedNum[0]);
    // result = firstNode;
    // for (let i = 1; i < reversedNum.length; i++) {
    //     let node = new ListNode(reversedNum[i]);
    //     firstNode.next = node;
    //     firstNode = firstNode.next;       
    // }
    // return result;
    
    let reversed = num.toString().split('').reverse();
    for (let i = 0; i < reversed.length; i++) {
        reversed[i] = Number(reversed[i]);
    }
    return reversed;
}

let node1 = new ListNode(2);
let node2 = node1.next = new ListNode(4);
let node3 = node2.next = new ListNode(3);

let node4 = new ListNode(5);
let node5 = node4.next = new ListNode(6);
let node6 = node5.next = new ListNode(4);