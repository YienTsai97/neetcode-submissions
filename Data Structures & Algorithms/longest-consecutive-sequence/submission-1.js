class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if ( nums.length === 0 ) return 0
        
        //delete duplicate & sort number
        const refNums = [ ... new Set( nums.sort((a,b)=> a-b))]

        //use Map to pick Consecutive Sequence
        let currLength = 1
        let longest = 1
        for ( let i = 0 ; i < refNums.length ; i++) {
            if(refNums[i] === refNums[i-1]+1){
                currLength ++
            }else{
                currLength = 1
            }
            longest = Math.max(currLength , longest)
        }

        return longest
    }
}
