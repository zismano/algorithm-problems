/*
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let leftMostValue = root.val;
  let leftMostRow = 0;
  let leftMostPath = [];
  const findPath = (row, path, node) => {
    if (!node.left && !node.right) {
        if (row > leftMostRow) {
            leftMostRow = row;
            leftMostPath = path.slice(0);
            leftMostValue = node.val;
        } else if (row === leftMostRow) {
            for (let i = 0; i < path.length; i++) {
                if (path[i] === 'left' && leftMostPath[i] === 'right') {
                    leftMostPath = path.slice(0);
                    leftMostValue = node.val;
                    break;
                } else if (path[i] !== leftMostPath[i]) {
                    break;
                }
            }
        }
    }
    if (node.left) {
       findPath(row + 1, path.concat('left'), node.left); 
    }
    if (node.right) {
        findPath(row + 1, path.concat('right'), node.right);
    }
  }
  findPath(0, [], root);
  return leftMostValue;
};