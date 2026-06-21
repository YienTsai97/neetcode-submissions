class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let l = 0
        let r = 0
        let res = 0

        while(r < s.length){
            if(!set.has(s[r])){
                set.add(s[r])
                r++
            }else{
                set.delete(s[l])
                l++
            }
            res = Math.max(res, set.size)
        }
        return res
    }
}
