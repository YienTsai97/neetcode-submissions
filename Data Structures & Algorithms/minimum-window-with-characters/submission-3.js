class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length>s.length) return ""
        const need = new Map()
        const window = new Map()

        for(let char of t){
            need.set(char, (need.get(char) || 0) + 1)
        }
        let have = 0
        let needCount = need.size

        let left = 0
        let res = ""
        let resLen = Infinity

        for(let right = 0 ; right < s.length ; right++){
            const char = s[right]

            window.set(char, (window.get(char)|| 0 ) + 1)
            if(need.has(char) && window.get(char) === need.get(char)){
                have ++
            }

            while(have === needCount){
                const currentLen = right - left + 1
                if(resLen > currentLen) { 
                    res = s.slice(left, right + 1)
                    resLen = currentLen
                }
                const leftChar = s[left]
                window.set(leftChar, window.get(leftChar) - 1)
                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)){
                    have--
                }
                left ++
            }
        }
        return res
    }
}
