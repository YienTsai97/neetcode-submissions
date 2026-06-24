class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric  = (char) => /^[a-z0-9]$/i.test(char)
        let l = 0
        let r = s.length - 1

        while (l < r){
            while(l<r && !isAlphanumeric(s[l])){
                l++
            }
            while(l<r && !isAlphanumeric(s[r])){
                r--
            }
            if(s[r].toLowerCase() !== s[l].toLowerCase()) return false
            l++
            r--
        }
        return true
    }
}
