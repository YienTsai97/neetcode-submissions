class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let res = 0

        for ( let n of nums){             

            if (count === 0) {
                if(res !== n) res = n
                count ++
            } else {
                if(res !== n) {
                    count --
                } else {
                    count ++
                }
            }
        }

        return res
    }
}
