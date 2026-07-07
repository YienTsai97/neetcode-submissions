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

        if (!s) return false
        if (!t) return true
        if (this.isSametree(s,t)) return true

        return (
            this.isSubtree(s.right,t) ||
            this.isSubtree(s.left,t)
        )
    }

    isSametree(s,t){
        if(!s && !t) return true
        if(s && t && s.val === t.val ) {
            return (
                this.isSametree(s.left,t.left) &&
                this.isSametree(s.right,t.right))
        }
        return false 
    }
}
