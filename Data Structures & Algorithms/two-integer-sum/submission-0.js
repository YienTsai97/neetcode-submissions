class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = new Map()
        for (let i = 0 ; i < nums.length ; i++ ){
            const result = target - nums[i]
            if (numsMap.has(result)) {
                return [i,numsMap.get(result)]
                }
            numsMap.set(nums[i],i)
        }   
    }
}
