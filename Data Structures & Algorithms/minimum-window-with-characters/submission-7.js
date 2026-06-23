class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return ""

        let mapT = new Map()
        for(let i = 0 ; i < t.length ; i++){
            mapT.set(t[i], (mapT.get(t[i])|| 0 ) + 1)
        }

        let need = mapT.size
        let have = 0
        let l = 0
        let minLen = Infinity
        let mapS = new Map()
        let res = [0, 0]
        for (let r = 0 ; r < s.length ; r++) {
            mapS.set(s[r], (mapS.get(s[r]) || 0) + 1)
            if( mapT.has(s[r]) && mapS.get(s[r]) === mapT.get(s[r])) {
                have++
            }         
            while(have === need){
                let thisLen = r - l + 1
                if(thisLen < minLen) {
                    res = [l, r]
                    minLen = thisLen
                }
                
                
                mapS.set(s[l], mapS.get(s[l]) - 1)
                if(mapT.has(s[l]) && mapT.get(s[l]) > mapS.get(s[l])){
                    have--
                }
                l++
            }
        }
        return minLen === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}
