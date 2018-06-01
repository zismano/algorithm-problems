/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let inverted;
    
    const recInvert = function(root, inverted) {
        if (root.left) {
            let newNode = inverted.right = new TreeNode(root.left.val);
            recInvert(root.left, inverted.right);
        }
        if (root.right) {
            let newNode = inverted.left = new TreeNode(root.right.val);
            recInvert(root.right, inverted.left);
        } 
    }
    
    if (root) {
        inverted = new TreeNode(root.val);
        recInvert(root, inverted);
    } else {
        return root;
    }    
 
    return inverted;
};