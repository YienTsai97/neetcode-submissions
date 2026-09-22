class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let curr = nums[0]

        for(let n of nums){
            if(curr !== n){
                if(count === 0){
                    curr = n
                    count++
                }else if(count > 0){
                    count--
                }
            } else count++
        }

        return curr
    }
}
