class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if ( nums.length === 0 ) return 0
        
        //delete duplicate & sort number
        const numsSet =  new Set(nums)
        let longest = 1

        for ( let num of numsSet) {

            //start number
            if(!numsSet.has(num-1)){
                let currNum = num
                let currLength = 1


                //check is num+1 already exist >> loop
                while(numsSet.has(currNum + 1 )){
                    currNum++
                    currLength ++
                }
                longest = Math.max(currLength , longest)
            }
        }
        return longest
    }
}
