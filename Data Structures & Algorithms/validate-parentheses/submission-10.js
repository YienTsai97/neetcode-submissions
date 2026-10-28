class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            "}":"{",
            "]":"[",
            ")":"("
        }
        
        for(let c of s ){
            const isClosing = closeToOpen[c]
            
           if(isClosing && stack.length > 0){
            if(closeToOpen[c] !== stack.pop()) return false
           } else{
            stack.push(c)
           }
        }

        return stack.length === 0
    }
}
