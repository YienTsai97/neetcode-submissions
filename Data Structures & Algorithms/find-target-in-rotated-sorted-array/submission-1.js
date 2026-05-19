class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while( l <= r){
            let m = Math.floor((l + r) / 2)
            if(nums[m] === target) return m

            if ( nums[l] <= nums[m]){ // 345|012 m5 
                if( target < nums[m] &&  nums[l] <= target ){ // target 3
                    r = m - 1
                } else  { // target 2
                    l = m + 1
                }
            } else { // nums l > nums M , 45|0123 m0
                if (  target <= nums[r] &&  nums[m] < target ) { // target 2
                    l = m + 1
                } else { // target 4
                    r = m - 1
                }
            }
        }
        return -1
    }
}
