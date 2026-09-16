class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0
        let r = 1

        for(let r = 1 ; r < nums.length ; r++){
            if(nums[r] !== 0 && nums[l] === 0){
                let numL = nums[l]
                let numR = nums[r]
                nums[l] = numR
                nums[r] = numL 
            }
            if(nums[l] !== 0) l++ 
        }
    }
}
