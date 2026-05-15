class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const output = []
        for (let str of strs){
            output.push(str.length + "#" + str)
        }
        return output.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0 
        
        while(i < str.length){
            const arr = []
            arr.push(str[i])
            while(str[i+1] !== "#"){
                arr.push(str[i+1])
                i++
            }
            const count = Number(arr.join(""))
            const start = i+2
            const end = start + count
            res.push(str.slice(start,end))
            i = end
        }
        return res
    }
}
