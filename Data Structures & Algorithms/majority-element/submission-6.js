class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let res = nums[0]

        for (let i = 0 ; i < nums.length ; i++){
            if(res !== nums[i]){
                if (count === 0) {
                    res = nums[i]
                    count++
                }else{
                    count--
                }
            }else{
                count++
            }
        }

        return res
    }
}
