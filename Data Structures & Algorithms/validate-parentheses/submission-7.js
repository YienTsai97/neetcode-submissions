class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
         const char = {
            "}":"{",
            "]":"[",
            ")":"("
         }
         let stack = []

         for(let i of s){
            let isClosing = char[i]
            if(!isClosing){
                 stack.push(i)
            }
            else if (isClosing && stack.length > 0){
                const target = stack.pop()
                if(char[i] !== target) return false
            }else return false
         }
         return stack.length === 0
    }
}
