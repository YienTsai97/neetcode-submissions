class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        //edge case
        if (nums.length === 1 ) return nums[0]

        let max = nums[0]
        let curSum = 0

        for (let n of nums){
            curSum < 0 ? curSum = 0 : null
            curSum += n
            max = Math.max (max , curSum)
        }

        return max
    }
}
