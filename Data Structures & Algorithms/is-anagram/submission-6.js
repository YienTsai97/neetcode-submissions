class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map=  new Map()

        for(let char of s){
            if(!map.has(char)) map.set(char,0)
            map.set(char, map.get(char) + 1 )
        }

        for (let char of t){
            if(!map.has(char)) return false
            map.set(char, map.get(char) - 1)
        }

        const arr = [...map.values()]
        //return arr.every((num) => num === 0) //every=>全部符合
        return !arr.some((num) => num !== 0) // some=> 其一符合 return true
    }
}
