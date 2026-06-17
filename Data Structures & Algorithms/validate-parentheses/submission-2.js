class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            "}":"{",
            "]":"[",
            ")":"("
        }
        const stack = []

        for (let i of s){
            let isClosing = closeToOpen[i]

            if(!isClosing){
                stack.push(i)
            } else if (
                stack.length > 0 && 
                stack[stack.length - 1] === closeToOpen[i]){
                stack.pop()
            } else { 
                return false
            }
        }
        return stack.length === 0
    }
}
