class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0
        let maxFreq = 0
        let left = 0
        const map = new Map()
        
        for(let right = 0 ; right < s.length ; right++) {
            // const length = right - left + 1
            
            map.set(s[right], (map.get(s[right]) || 0) + 1)

            maxFreq = Math.max( maxFreq , map.get(s[right]))

            if (right - left + 1 - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1)
                left ++
            }

            longest = Math.max( longest , right - left + 1 )
            

        }
        return longest
    }
}
