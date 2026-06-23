class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "" 

        let count = new Map()
        for (let i = 0 ; i < t.length ; i++){
            count.set(t[i],(count.get(t[i]) || 0) + 1)
        }

        let window = new Map()
        let have = 0
        let need = count.size
        let minLen = Infinity
        let res = [-1,-1]
        let l = 0
        for (let r = 0 ; r < s.length ; r++){
            window.set(s[r], (window.get(s[r]) || 0) + 1)
            if(count.has(s[r]) && count.get(s[r]) === window.get(s[r])){
                have++
            }

            while( have === need){
                let thisLen = r - l + 1
                if(thisLen < minLen){
                    res = [l , r]
                    minLen = thisLen
                }

                window.set(s[l], window.get(s[l]) - 1 )
                if(count.has(s[l]) && count.get(s[l]) > window.get(s[l])){
                    have--
                }
                l++
            }
        }
        return minLen === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}
