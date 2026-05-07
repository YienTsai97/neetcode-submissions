class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //string[] -> "string"
        const array = []
        for ( let str of strs){
            array.push(str.length + "#" + str)
        }
        return array.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0 


        while ( i < str.length ){
            //find number and index of "#" (j)
            let countarr = []
            countarr.push(str[i])

            while( str[i+1] !== "#") {
            countarr.push(str[i+1])
            i++
            }

            const charCount = Number(countarr.join(""))

            //find word
            const sliceStart = i + 2 //(firstChar) str[i+1 ]= "#"
            const sliceEnd = sliceStart + charCount // = start index of next group
            const word = str.slice(sliceStart, sliceEnd)
            result.push(word)
            i = sliceEnd //jump to next group
        }
        return result
    }
}
