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
        const stack = [[root,1]]
        let res = 0

        while(stack.length > 0){
            let curr = stack.pop()
            let depth = curr[1]
            let node = curr[0]

            if(node !== null){
                stack.push([node.left, depth + 1])
                stack.push([node.right, depth + 1])
                res = Math.max(depth, res)
            }
        }
        return res
    }
}
