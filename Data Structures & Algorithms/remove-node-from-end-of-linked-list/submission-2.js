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
        let fast = head //這版直接用head 
        while(n > 0){
            fast = fast.next
            n--
        }

        if(fast === null) return head.next // for head case 
        // head:[5], n:1 > []
        // head:[1,2,3,4,5], n:5 > [2,3,4,5]

        let slow = head
        while(fast.next){
            fast = fast.next
            slow = slow.next
        }

        slow.next = slow.next.next
        return head
    }
}
