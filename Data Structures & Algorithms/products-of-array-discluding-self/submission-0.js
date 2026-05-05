class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answer = new Array(nums.length);

        let prefix = 1;

        // left to right
        for( let i = 0; i < nums.length ; i++) {
            answer[i] = prefix
            prefix = prefix * nums[i]
        }

        let suffix = 1;

        // right to left
        for( let i = nums.length - 1 ; i >= 0 ; i--) {
            answer[i] = answer[i] * suffix
            suffix = suffix * nums[i]
        }

        return answer;
    }
}