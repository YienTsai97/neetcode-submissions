class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0 
        let r = nums.length - 1

        while( l < r){
            // find mid and put in left or right portion
            let mid = Math.floor((l + r) / 2)

            if( nums[mid] > nums[r]){
                l = mid + 1
            } else {
                r = mid
            }
        }
    return nums[l]
    }
}
