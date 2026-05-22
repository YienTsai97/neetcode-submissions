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
        let node = new ListNode(0,head)
        let slow = node
        let fast = node

        while(n>0){
            fast = fast.next
            n--
        }

        while(fast.next){
            fast = fast.next
            slow = slow.next
        }
        slow.next = slow.next.next
        return node.next
    }
}
