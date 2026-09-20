class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map()

        for(let c of s){
            map.set(c, (map.get(c) || 0) + 1) 
        }
        for(let c of t){
            map.set(c, (map.get(c) || 0) - 1)
        }

        let res = [...map.values()]
        return !res.some((num) => num !== 0)
    } 
}
