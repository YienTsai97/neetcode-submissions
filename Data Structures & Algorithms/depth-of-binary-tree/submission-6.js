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
        let stack = []
        let level = 0

        root && stack.push(root)

        while(stack.length > 0){
            let length = stack.length

            for(let i = 0 ; i < length ; i++){
                let node = stack.shift()
                node.left && stack.push(node.left)
                node.right && stack.push(node.right)
            }
            level++
        }
        return level
    }
}
