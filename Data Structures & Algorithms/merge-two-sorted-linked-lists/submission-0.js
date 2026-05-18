/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //let node = new ListNode()
        let node = { val:0 , next:null } // set a unmovable dummy head so the answer is node.next
        let tail = node // should always be the last node in the whole list, keep moving forward


        if(!list1) return list2
        if(!list2) return list1

        while (list1 && list2){
            if( list1.val <= list2.val){
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }
        //if one is empty and the others is not
        if(list1) tail.next  = list1
        if(list2) tail.next = list2
        return node.next
    }
}
