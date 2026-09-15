class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // const map = new Map()

        // for(let i = 0; i < nums.length; i++){
        //     let n = target - nums[i]
        //     if(map.has(n)){
        //         return [map.get(n), i]
        //     }
        //     map.set(nums[i], i)
        // }
        for(let i = 0; i < nums.length; i++){
            for(let r = nums.length; i < r  ; r --){
                let res = target - nums[i]
                if(nums[r] === res) return [i,r]
            }
        }
    }
}
