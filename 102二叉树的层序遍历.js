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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return [];

  // 定义一个队列queue, queque为一个数组存储当前层的节点，来遍历每一层的节点
  let result = [], queue = [root];
  // 只要当前层队列有节点则遍历
  while(queue.length) {
      // 创建当前层临时存子节点的数组
      let now = [];
      const len = queue.length;
      for(let i = 0; i < len; i++) {
          // 弹出队列节点
          let node = queue.shift();
          now.push(node.val);
          
          // 如果当前节点下存在左/右子节点，则推入到队列中，下一次循环使用
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      result.push(now);
  }
  return result;
};