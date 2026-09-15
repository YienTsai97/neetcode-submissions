class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = (char) => /^[a-z0-9]$/i.test(char)
        let left = 0
        let right = s.length - 1

        while(left < right){
            while(left < right && !isAlphanumeric(s[left])){
                left++
            }
            while(left < right && !isAlphanumeric(s[right])){
                right--
            }
            if(s[right].toLowerCase() !== s[left].toLowerCase()) return false
            left++
            right--
        }
        return true
    }
}
