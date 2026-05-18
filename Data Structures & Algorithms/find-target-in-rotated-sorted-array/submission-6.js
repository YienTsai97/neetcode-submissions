class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) { 
        let l = 0 
        let r = nums.length - 1
        
        while ( l <= r) {
            let mid = Math.floor(( r + l) / 2)
            if (nums[mid] === target) return mid

            //sort left portion >> target at right
            if(nums[mid] >= nums[l]){
                if( target > nums[mid] || target < nums[l]){
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            //sort right portion >> target at left
            } else if (nums[mid] < nums[r]) {
                if( target < nums[mid]|| target > nums[r]){
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        }
        return -1
    }
}
