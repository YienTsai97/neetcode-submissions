class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map()
        let maxFeq = 0
        let maxLength = 0
        let left = 0

        for(let right = 0 ; right < s.length ; right++){
            //add right value in Map
            count.set(s[right],(count.get(s[right]) || 0) + 1)
            //check max char
            maxFeq = Math.max(maxFeq, count.get(s[right]))
            //check if the amount of replaced char > k then delete from left
            if(right - left + 1 - maxFeq > k){
                count.set(s[left],count.get(s[left]) - 1)
                left++
            }
            //check max (window) length
            maxLength = Math.max(maxLength, right - left + 1)
        }
        return maxLength
    }
}
