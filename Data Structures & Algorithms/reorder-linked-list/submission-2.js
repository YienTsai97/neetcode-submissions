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
        let fast = head
        while(fast && fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        let head2 = slow.next
        slow.next = null

        let prev = null
        while(head2){
            let nxt = head2.next
            head2.next = prev
            prev = head2
            head2 = nxt
        }

        let h1 = head
        let h2 = prev
        while(h2){
            let tmp1 = h1.next
            let tmp2 = h2.next

            h1.next = h2
            h2.next = tmp1
            h1 = tmp1
            h2 = tmp2
        }
    }
}
