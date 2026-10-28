class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const map = new Map()

        for(let c of s){
            map.set(c, (map.get(c) || 0) + 1)
        }

        for(let i = 0 ; i < s.length ; i++){
            const count = map.get(s[i])
            if (count === 1) return i 
        }

        return -1
    }
}
