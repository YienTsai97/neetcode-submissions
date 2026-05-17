class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // {[()]}
    //stack = ["{","[","("]
    isValid(s) {
        const closeToOpen = {
            "}":"{",
            "]":"[",
            ")":"("
        }

        let stack = []

        for (let p of s){
            const isClosing = closeToOpen[p]

            if(!isClosing){
                stack.push(p)
            } else if (stack.length > 0 && stack[stack.length-1] === closeToOpen[p]) {
                stack.pop()
            } else {
                return false
            }
        } 
        return stack.length === 0
    }
}

