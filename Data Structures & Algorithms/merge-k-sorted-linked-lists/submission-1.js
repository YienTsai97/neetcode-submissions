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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length == 0) return null

        while(lists.length > 1){
            let mergedLists = []
            
            for(let i = 0; i < lists.length; i+=2){
                let l1 = lists[i]
                let l2 = lists[i+1] ?? null
                // merge L1+L2
                mergedLists.push(this.merge(l1,l2))
            }
            lists = mergedLists
        }
        return lists[0]
    }

    merge(l1,l2){
        if(!l2) return l1
        if(!l1) return l2
        let dummy = new ListNode()
        let tail = dummy

        while(l1 && l2){
            if(l1.val < l2.val){
                tail.next = l1
                l1 = l1.next
            }else{
                tail.next = l2
                l2 = l2.next
            }
            tail = tail.next
        }
        if (l1) tail.next = l1
        if (l2) tail.next = l2
        return dummy.next
    }
}
