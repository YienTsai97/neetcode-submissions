class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let res = 0

        for(let num of nums){
            // if( count === 0 && res !== num) {
            //     res = num
            //     count++
            // } else if ( res === num){
            //     count++
            // } else if ( count !== 0 && res !== num){
            //     count--
            // }

            if( res !== num ){
                if ( count === 0) {
                    res = num
                    count ++
                } else count --
            } else count++
        }

        return res
    }
}
