class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const setS = new Set(s)
        const setT = new Set(t)
        return setS.size === setT.size && [...setS].every(value=>setT.has(value))
    }
}
