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
// 合并两个链表为一个 
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
// ??? js里没有.next
var mergeTwoLists = function(l1, l2) {
    if(!l1){
      return l2;
    };
    if(!l2){
      return l1
    };
  
    if(l1.val <l2.val){
      l1.next = mergeTwoLists(l1.next,l2);
      return l1
    }else{
      l2.next = mergeTwoLists(l1,l2.next);
      return l2
    }
    
  };