class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0
        let r = 1

        while( r < nums.length){

            if( nums[l] === 0 && nums[r] !== 0 ){
                let left = nums[l]
                let right = nums[r]
                nums[r] = left
                nums[l] = right
            }
            if (nums[l] !== 0) { l++ }
            r++
        }
    }
}
