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
        //seperate to two link list
        while(fast.next && fast.next.next)
        {
            slow = slow.next
            fast = fast.next.next
        }
        let head2 = slow.next
        slow.next = null
        let prev = null

        //reverse the second link list
        while(head2){
            let nxt = head2.next
            head2.next = prev
            prev = head2
            head2 = nxt
        }

        //merge 2 linkList 
        let h1 = head //1* 23
        let h2 = prev //5* 4
        while(h2){
            let temp1 = h1.next
            let temp2 = h2.next
            h1.next = h2
            h2.next = temp1
            h1 = temp1
            h2 = temp2
            
        }
    }
}
