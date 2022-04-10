/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function(head) {
 // 输入head: [1,2,3,4,5]
 // 转换为链表的形式
 // let headListNode = null;
 // let currentNode = headListNode;
 // console.log(typeof head, Object.prototype.toString.call(head));
 // console.log(head, head.length);
 // for (let i = 0; i < head.length; i++ ) {
 //     // 头节点
 //     if (!currentNode) {
 //         headListNode = new ListNode(head[i]);
 //         currentNode = headListNode;
 //     } else {
 //         // 衔接
 //         let tmp = new ListNode(head[i]);
 //         currentNode.next = tmp;
 //         currentNode = currentNode.next;
 //     }
 // }
 // console.log(headListNode);

 // 进行反转
 // let current = headListNode;
 let current = head;
 let prev = null;
 while(current) {
     // 临时存放next节点
     let next = current.next;
     // 将当前的next节点指向前面一个节点
     current.next = prev;
     // 准备移动指针到下一个节点，将上一个节点指向到当前节点上
     prev = current;
     // 讲临时存放的next下一个节点给到当前节点进行后续遍历
     current = next;
 }
 return prev;
};