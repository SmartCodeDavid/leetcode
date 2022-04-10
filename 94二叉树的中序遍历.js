/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 // 中旬遍历：首先遍历左节点，然后中间根节点，最后右边节点, 递归的方式遍历
 var inorderTraversal = function(root) {

    let result = [];

    const inorderTraverse = (node, res) => {
        if (!node) return;
        inorderTraverse(node.left, res);
        res.push(node.val);
        inorderTraverse(node.right, res);
    }

    inorderTraverse(root, result);

    return result;
};