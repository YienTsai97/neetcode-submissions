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
        const q = new Queue()
        let level = 0

        if (root) q.push(root)

        while(q.size() > 0){
            const size = q.size()

            for(let i = 0 ; i < size ; i++){
            const node = q.pop()
            node.left && q.push(node.left)
            node.right && q.push(node.right)
            }
            level++
        }
        return level
    }
}
