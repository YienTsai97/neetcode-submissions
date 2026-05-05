class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if([...s].length !== [...t].length) return false
        if ([...new Set(s)].every(value=>new Set(t).has(value))) {return true} else {return false}
    }
}
