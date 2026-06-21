class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "" ) return ""
        let mapT = new Map()
        let window = new Map()
        let res = [ -1 , -1]
        let l = 0

        for (let i = 0; i < t.length ; i++){
            mapT.set(t[i], (mapT.get(t[i]) || 0) + 1)
        }

        let need = mapT.size
        let have = 0
        let resLen = Infinity

        for(let r = 0 ; r < s.length ; r++){
            window.set(s[r], (window.get(s[r])|| 0) + 1)
            if(mapT.has(s[r]) && window.get(s[r]) === mapT.get(s[r])){
                have ++
            }
            while(have === need){
                if (r - l + 1 < resLen){
                    res = [l, r]
                    resLen = r - l + 1
                }
                window.set(s[l] , window.get(s[l]) - 1)
                if(mapT.has(s[l]) && window.get(s[l]) < mapT.get(s[l]) ){
                    have--
                }
                l++
            }
        }
        if(resLen === Infinity) return  "" 
        return s.slice(res[0],res[1]+1)
    }
}
