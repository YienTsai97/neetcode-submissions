class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //set init num for count
        let prefix = 1
        let suffix = 1 
        const res = []

        //prefix: from right to left
        for (let i = 0 ; i < nums.length ; i++){
            res.push(prefix)
            prefix = prefix * nums[i]
        }
        //suffix: from left to right
        for (let i = nums.length - 1 ; i >= 0 ; i--){
            res[i] =  res[i] * suffix
            suffix = suffix * nums[i]
        }
        return res
    }
}
