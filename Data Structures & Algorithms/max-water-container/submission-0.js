class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let left = 0
        let right = heights.length-1

        while(left < right){
            let area = (right - left) * Math.min(heights[right],heights[left])
            res = Math.max(area,res)
            if (heights[left]<heights[right]){
                left++
            } else {
                right--
            } 
        }
        return res
    }
}
