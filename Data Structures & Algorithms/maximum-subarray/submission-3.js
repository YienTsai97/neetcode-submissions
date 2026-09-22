class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = 0
        let max = nums[0]

        for(let n of nums){
            curr = curr + n
            max = Math.max(max , curr)
            if(curr < 0) curr = 0 
        }

        return max
    }
}
