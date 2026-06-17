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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //use the gap of two pointer to find the target
        let dummy = new ListNode (0,head)
        let left = dummy
        let right = head
        for(let i = 0; i < n  && right && n > 0; i++ ){
            right = right.next
        }
        while(right){
            left = left.next
            right = right.next
        }
        left.next = left.next.next ?? null
        return dummy.next
    }
}
