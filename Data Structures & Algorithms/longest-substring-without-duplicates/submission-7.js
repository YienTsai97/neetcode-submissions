class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set()
        let maxCount = 0
        let l = 0
        let r = 0


        while(r < s.length){
            if(set.has(s[r])) {
                set.delete(s[l])
                l++
            }else{
                set.add(s[r])
                maxCount = Math.max(maxCount, r - l + 1)
                r++
            }
        }

        return maxCount
    }
}
