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

    //recursive
    isSubtree(root, subRoot) {
        let s = root
        let t = subRoot

        if (t === null) return true
        if (s === null) return false


        //helper Same Tree
        if(this.sameTree(s,t)) return true

        //recursive
        return(
            this.isSubtree(s.left, t) ||
            this.isSubtree(s.right, t)
        )
    }

    sameTree(s, t){
        if (s === null && t === null) return true

        if (s && t && s.val === t.val){
            return (
                this.sameTree(s.left, t.left) &&
                this.sameTree(s.right, t.right)
                )
        }
        return false
    }
}
