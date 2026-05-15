class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = {}
        let left = 0
        let maxFreq = 0
        let maxLength = 0

        for(let right = 0 ; right < s.length ; right ++){
            // if (!(map[s.right] in map)) map[s[right]] = 0
            // map[s[right]] ++
            map[s[right]] = (map[s[right]] || 0) + 1
            maxFreq = Math.max(maxFreq, map[s[right]])

            if(right - left + 1 - maxFreq > k){
                map[s[left]] --
                left++
            }

            maxLength = Math.max(maxLength , right - left + 1)
        }
        return maxLength
    }
}
