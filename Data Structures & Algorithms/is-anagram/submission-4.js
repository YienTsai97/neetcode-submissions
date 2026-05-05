class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        // const sSort = s.split("").sort().join()
        // const tSort = t.split("").sort().join()
        // return sSort === tSort

        const count = {}
        for (let char of s){
            count[char] = (count[char] || 0) + 1
        }
        for (let char of t){
            if (!count[char] ||count[char]== 0) return false
            count[char]--
        }
        return true
    }
}
