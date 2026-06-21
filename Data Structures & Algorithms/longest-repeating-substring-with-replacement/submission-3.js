class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let map = new Map()
        let maxF = 0
        let res = 0

        for(let r = 0; r < s.length ; r++){
            //add or overwhite the value of s[r] in map
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            //get the count of the max freq item
            maxF = Math.max(maxF, map.get(s[r]))
            // if l - r is bigger than k means >>
            //there's no enough room for replacing character
            while((r - l) + 1 - maxF > k){
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
            res = Math.max(res , r - l + 1)
        }
        return res
    }
}
