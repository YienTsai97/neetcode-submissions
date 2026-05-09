class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        if(nums.length === 0) return 0
        let longest = 0

        for(let n of nums){
            let length = 0

            if(!numsSet.has(n-1)){
                while (numsSet.has(n + length)){
                    length++
                }
            }
            longest = Math.max(length, longest)
        }
        return longest
    }
}
