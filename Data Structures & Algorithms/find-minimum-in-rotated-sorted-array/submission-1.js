class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0 
        let r = nums.length - 1
        let res = Infinity

        while( l <= r){
            //find current min
            if( nums[l] <= nums[r]){
                res = Math.min(res, nums[l])
            } else {
                res = Math.min(res, nums[r])
            }

            // find mid and put in left or right portion
            let mid = Math.floor((l + r) / 2)

            if( nums[mid] >= nums[l]){
                l = mid + 1
            } else {
                r = mid
            }
        }
    return res
    }
}
