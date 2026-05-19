class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let L = 0 
        let R = nums.length - 1


        while(L < R){
            const M = Math.floor((L + R) / 2)
            //使用排除法 eg:56734, 7>4 確定有輪轉,"至少確定"最小值一定在右側 M R之間
            if(nums[R] < nums[M]){
                L = M + 1
            } else {
                R = M
            }
        }
        return nums[L]
    }
}
