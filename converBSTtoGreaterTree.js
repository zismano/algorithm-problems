/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
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
var convertBST = function(root) {
    let newTree = new TreeNode();
    const createGreaterTree = function(node, newNode) {
        if (node) {
            let sum = sumGreaterThanNode(node.val, root);
            newNode.val = sum + node.val;
            if (node.left) {
                let newLeftNode = newNode.left = new TreeNode();
                createGreaterTree(node.left, newLeftNode);           
            }
            if (node.right) {
                let newRightNode = newNode.right = new TreeNode();              
                createGreaterTree(node.right, newNode.right)                     
            }
        }      
    }
    if (!root) {
        return root;
    }
    createGreaterTree(root, newTree);
    return newTree;
};

const sumGreaterThanNode = function(value, root) {
  if (!root) {
    return 0;
  }
  if (root.val > value) {
    return sumGreaterThanNode(value, root.left) + sumGreaterThanNode(value, root.right) + root.val;
  } else {
    return sumGreaterThanNode(value, root.left) + sumGreaterThanNode(value, root.right);  
  }
}