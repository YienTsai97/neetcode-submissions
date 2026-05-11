class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        let sortedNums = nums.sort((a,b) => a-b)
        
        for(let i = 0; i < sortedNums.length - 1 ; i++){
            let left = i + 1
            let right = sortedNums.length - 1
            if( i > 0 && sortedNums[i] === sortedNums[i-1]) continue // from num[1] avoid duplicate value/answer

            while(left < right){
                let sum = sortedNums[i] + sortedNums[left] + sortedNums[right]

                if(sum < 0) { 
                    left++
                } else if (sum > 0) {
                    right--
                } else {
                    res.push([sortedNums[i],sortedNums[left],sortedNums[right]]) 
                    left++    
                    right--
                    while (left < right && sortedNums[left] === sortedNums[left-1]){
                        left++
                    } 
                }       
            }
        }
        return res
    }
}
