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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0

        let depth = 0
        let q = [root]

        while(q.length) {
            const size = q.length //訂好每個level該有的length or q.push會造成無限loop

            for(let i = 0 ; i < size ; i++ ){
                let cur = q.shift()
                if(cur.left) q.push(cur.left)
                if(cur.right) q.push(cur.right)
            }
            depth ++
        }
        return depth
    }
}
