class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const char = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        let arr = []

        for( let p of s){
            if(Object.values(char).includes(p)){
                arr.push(p)
            }else{
                let psis = arr.pop()
                if(char[p] !== psis){
                    return false
                }
            }
        }

        return (arr.length == 0) ? true : false
    }
}
