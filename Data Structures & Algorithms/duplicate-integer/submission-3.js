class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        return nums.some((num)=>{
            if(map.has(num))return true
            map.set(num,true)
        })
    }
}
