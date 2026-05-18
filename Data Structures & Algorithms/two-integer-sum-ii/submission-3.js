class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let r = numbers.length - 1
        let l = 0

        while(l < r){
        let sum = numbers[r] + numbers[l]
            if( sum > target) r--
            if( sum < target) l++
            if (sum === target) return [l+1 ,r+1 ]
        }
    }
}
