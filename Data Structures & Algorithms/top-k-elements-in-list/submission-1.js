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
        for(let i = 1; i <= k ; i++){
            if (i > bucket.length) break
            result.push(filterbucket[filterbucket.length - i])
        }

        console.log(bucket)
        return result
    }
}