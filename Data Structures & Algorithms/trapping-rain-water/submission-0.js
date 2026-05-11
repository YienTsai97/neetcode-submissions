class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1
        let maxL = height[left]
        let maxR = height[right]
        let res = 0


        while (left < right){
            if( maxL < maxR ) {
                left++
                maxL = Math.max(maxL, height[left])
                res += maxL - height[left]
            } else { // maxL >= maxR
                right--
                maxR = Math.max(maxR,  height[right])
                res += maxR - height[right]
            }
        }
        return res
    }
}
