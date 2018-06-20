/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let hashLevels = {};
    const findAverageOfLevel = (node, level) => {
        if (node) {
            if (hashLevels[level]) {
                hashLevels[level].count++;
                hashLevels[level].sum += node.val;
            } else {
                hashLevels[level] = {
                  count: 1,
                  sum: node.val
                }
            }
            findAverageOfLevel(node.left, level + 1);
            findAverageOfLevel(node.right, level + 1);
        }      
    }
    findAverageOfLevel(root, 0);
    let len = 0;
    for (let key in hashLevels) {
        len++;
    }
    let result = [];
    for (let i = 0; i < len; i++) {
        result.push(hashLevels[i].sum / hashLevels[i].count);
    }
    return result;
};