/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 移除有序列表中的重复项
// js中没有链表格式，可以使用.next探测下一指针。判断val值是否相等，若相等取再下一位
var deleteDuplicates = function(head) {
    let cur = head;
    while(cur && cur.next){
       if(cur.val === cur.next.val){
           cur.next = cur.next.next;
       }else{
           cur =cur.next;
       }
    }
    return head;
};