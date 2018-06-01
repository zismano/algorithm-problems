/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let tree;
    const recCreateMaximumBT = (nums, node, direction) => {
        if (nums.length) {
            // find max num in nums
            let maxNum = getMaxInArray(nums);
            let index = nums.indexOf(maxNum);
            let newNode = node[direction] = new TreeNode(maxNum); 
            recCreateMaximumBT(nums.slice(0, index), newNode, "left");
            recCreateMaximumBT(nums.slice(index + 1), newNode, "right");
        }
    }
    if (nums.length) {
        let maxNum = getMaxInArray(nums);
        let index = nums.indexOf(maxNum);
        tree = new TreeNode(maxNum);
        recCreateMaximumBT(nums.slice(0, index), tree, "left");
        recCreateMaximumBT(nums.slice(index + 1), tree, "right");
        return tree;           
    }
    return nums;
};

const getMaxInArray = nums => nums.reduce((a, b) => Math.max(a, b));