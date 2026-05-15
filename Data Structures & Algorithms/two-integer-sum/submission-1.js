class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0 ; i < nums.length ; i++){
            const res = target - nums[i]
            if(map.has(res)) return [i, map.get(res)]
            map.set(nums[i],i)
        }
    }
}
