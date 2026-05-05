class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        
        for (let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => [])

        // item => [freq, num] 
        // for (let item of map){
        //     const num = item[0]
        //     const freq = item[1]
        //     bucket[freq].push(num)
        // }
        for (let [num, freq] of map){
            bucket[freq].push(num)
        }

        const filterbucket = bucket.filter(num => num.length != 0)
        const result = new Array()
        for(let i = filterbucket.length - 1 ; i >= 0 && result.length < k ; i--){
            for(let num of filterbucket[i]){
                result.push(num)
                if ( result.length == k ) break
            }
        }

        console.log(filterbucket)
        return result
    }
}