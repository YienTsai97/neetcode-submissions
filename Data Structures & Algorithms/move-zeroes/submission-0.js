class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let i = 0
        let limit = 0
        while(limit < nums.length){
            if(nums[i] === 0){
                nums.splice(i,1)
                nums.push(0)
            } else {
                i++
            }
            limit++
        }
    }
}
