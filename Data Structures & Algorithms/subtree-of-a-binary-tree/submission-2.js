/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const s = root
        const t = subRoot

        if(!s) return false
        if(!t) return true
        if(this.isSameTree(s,t)) return true

        //helper
        return (
            this.isSubtree(s.left ,t) ||
            this.isSubtree(s.right, t)
        )
    }

    isSameTree(s ,t){
        if(!s && !t)return true
        if(!s || !t || s.val !== t.val) return false

        return(
            this.isSameTree(s.left, t.left) &&
            this.isSameTree(s.right, t.right)
        )
    }
}
