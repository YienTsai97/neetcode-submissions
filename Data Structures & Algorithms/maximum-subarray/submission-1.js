class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let total = 0
        let max = -Infinity

        for (let n of nums){
            total = total + n
            max = Math.max(max, total)
            if (total < 0) total = 0            
        }
        return max
    }
}
