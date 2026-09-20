class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()


        for(let r = 0 ; r < nums.length; r++){
            let ans = target - nums[r]
            if (map.has(ans)) return [map.get(ans), r]
            else map.set( nums[r] ,r)
        }
    }
}
