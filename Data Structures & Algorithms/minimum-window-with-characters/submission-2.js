class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return ""
        if(s.length < t.length) return ""

        const window = new Map()
        const mapT = new Map()
        for(let char of t){
            mapT.set(char, (mapT.get(char) || 0) + 1)
        }

        let left = 0
        let have = 0
        const need = mapT.size
        let res = ""
        let resLen = Infinity

        for(let right = 0 ; right < s.length ; right++){
            //add new char in window
            const charR = s[right]
            window.set(charR, (window.get(charR) || 0) + 1)

            //check if this char count in window match T
            if(mapT.has(charR) && window.get(charR) === mapT.get(charR)) {
                have ++
            }

            // if all char amount in window match T (if true shrink the array from left)
            while(have === need){
                //Update result
                const thisLen = right - left + 1
                if (thisLen < resLen) {
                    resLen = thisLen
                    res = s.slice(left, right + 1)
                }
                //pop from left of window (to shrink the window finding min legal length)
                const charL = s[left]
                window.set(charL, window.get(charL) - 1)
                //check if amount of charL equal to mapT or not (have could change)
                if( mapT.has(charL) && window.get(charL) < mapT.get(charL)){
                    have--
                }
                left ++
            }
        }
        // if (resLen === Infinity)  return "" 
        return res
    }
}
