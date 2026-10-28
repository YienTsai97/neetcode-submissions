class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0 ; i < nums.length ; i++){
            let ans = target - nums[i]
            if(map.has(ans)) { return [map.get(ans),i ]
            }else{
                map.set(nums[i], i)
            }
        }
    }
}
