/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 // 相同的树
var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q); 
};
