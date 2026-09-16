class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0
        let maxCount = 0
        let map = new Map()

        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
            res = map.get(num) > maxCount ? num : res
            maxCount = Math.max(maxCount, map.get(num))
        }
        return res
    }
}
