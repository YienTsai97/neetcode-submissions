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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next
        //seperate to two link list
        while(fast && fast.next)
        {
            slow = slow.next
            fast = fast.next.next
        }
        let head2 = slow.next
        let prev = slow.next = null

        //reverse the second link list
        while(head2){
            let nxt = head2.next
            head2.next = prev
            prev = head2
            head2 = nxt
        }

        //merge 2 linkList 
        let first = head
        let second = prev
        while(second){
            let tmp1 = first.next
            let tmp2 = second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }
    }
}
