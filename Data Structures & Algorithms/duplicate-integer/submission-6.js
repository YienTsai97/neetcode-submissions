class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set()

        for(let n of nums){
            if(set.has(n)) return true
            else {
                set.add(n)
            }
        }
        return false
    }
}
