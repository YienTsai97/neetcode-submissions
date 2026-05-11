class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1

        while( left < right ){
            let sum = numbers[left] + numbers[right]
            // while ( left < right && sum < target) { left++ }//因為sum沒更新會引發bug
            // while ( left < right && sum > target) { right-- }
            // 使用if讓外層while迴圈再跑一次更新sum
            if ( left < right && sum < target) { left++ }
            if ( left < right && sum > target) { right-- }
            if (sum === target ) return [left + 1, right + 1]
        }
    }
}
