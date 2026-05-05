class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const arr = []
        strs.forEach ((str)=> {
            arr.push(str.length + "#" + str)
    })
    return arr.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0

        while (i < str.length){
            let j = i

            //找數字(若非個位數)
            while (str[j] !== "#") { j++ } 

            //找length
            const length = Number(str.slice(i,j))

            //找 #也就是(j+1) 後的string
            const start = j + 1
            const decodeString = str.slice(start , start + length)

            result.push(decodeString)

            //跳至下段
            i = start + length
          }
        return result
        }
    }

