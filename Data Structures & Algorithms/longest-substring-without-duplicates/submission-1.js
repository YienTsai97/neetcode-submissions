class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set()
        let left = 0
        let maxLength = 0

        for ( let right = 0 ; right < s.length ; right ++){
            while(seen.has(s[right])) {
                seen.delete(s[left])
                left++
            }
            seen.add(s[right])
            let len = right - left + 1 
            maxLength = Math.max( len , maxLength)
        }
        return maxLength
    }
}
