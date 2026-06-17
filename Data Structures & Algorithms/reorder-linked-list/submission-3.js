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

        //find middle point
        let slow = head
        let fast = head.next
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        let second = slow.next //middle point
        slow.next = null //let the end of the first point to null

        //reverse the direction second part
        let prev = null
        while(second){
            let tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }
        second = prev // head of the second part

        //merge the two half of the list
        //while(second) << in this case first must longer than second
        let first = head
        while(second){
            let tmp1 = first.next
            let tmp2 = second.next

            first.next = second
            second.next = tmp1
            
            //reset the pointer
            first = tmp1
            second = tmp2
        }
    }
}
