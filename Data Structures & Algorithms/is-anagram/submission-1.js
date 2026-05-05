class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.split().length !== t.split().length) return false
        const setS = new Set(s)
        const setT = new Set(t)
        if ([...setS].every(value=>setT.has(value))) {return true} else {return false}
    }
}
