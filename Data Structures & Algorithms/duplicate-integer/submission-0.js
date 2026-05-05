class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const setArray = [...new Set(nums)]
        // if (setArray.length == nums.length) {
        //     return false
        //     }else{
        //     return true
        //     }
        
        // return new Set(nums).size !== nums.length

        const map = new Map()
        // for (let num of nums){
        //     if (map.has(num)) return true
        //     map.set(num,true)
        // }
        return nums.some((num)=> {
        if (map.has(num)) return true
        map.set(num,true)
        })
    }
}
