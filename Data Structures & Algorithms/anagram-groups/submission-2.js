class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map()

        for(let str of strs){
            const sorted = str.split("").sort().join("")
            if(!res.has(sorted)) res.set(sorted, [])
            res.get(sorted).push(str)
        }

        return [...res.values()]
    }
}
