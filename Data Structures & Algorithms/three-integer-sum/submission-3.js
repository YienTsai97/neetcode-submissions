class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.sort((a, b) => a - b)
        let res = []

        for( let i = 0 ; i < n.length ; i++){
            if( i > 0 && n[i-1] === n[i]) continue 
            let l = i + 1
            let r = n.length - 1
            while (l < r){
                let sum = n[i] + n[l] + n[r]

                if(sum > 0){
                    r--
                } else if (sum < 0) {
                    l++
                } else {
                    res.push([n[i], n[l], n[r]])
                    r--
                    l++
                    while( l < r && n[l] === n[l-1]){
                        l++
                    }
                }
            }
        }
        return res
    }
}
