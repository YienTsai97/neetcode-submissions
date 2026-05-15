class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = []
        let prefix = 1 
        let suffix = 1

        for (let i = 0 ; i < nums.length ; i++){
            res.push(prefix)
            prefix = nums[i] * prefix
        }
        for (let i = nums.length - 1 ; i >= 0 ; i--){
            res[i] = suffix * res[i]
            suffix = suffix * nums[i]
        }
        return res
    }
}
