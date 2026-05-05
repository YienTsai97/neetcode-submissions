class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        // const countKey = (string) =>{
        //         const array = new Array(26).fill(0)
        //         for (let i = 0 ; i < string.length ; i++ ){
        //             array[string.charCodeAt(i)-"a".charCodeAt(0)]++
        //         }
        //         return array.join("#")
        // }

        // for (const str of strs ){

        //     const key = countKey(str)
        //     if (map.has(key)){
        //         map.get(key).push(str)
        //     } else {
        //         // creat an array to calculate char frequency : countKey()
        //         // 1. store array as the "key" in the map 
        //         // 2. store the word as "value"
        //         map.set(countKey(str),[])
        //         map.get(key).push(str)
        //     }
        // }

        // const resultValue = Array.from(map.values()) // Map value group to array
        // return resultValue 

                
        for (const str of strs ){

            const array = new Array(26).fill(0)
            for (let i = 0 ; i < str.length ; i++ ){
                array[str.charCodeAt(i)-"a".charCodeAt(0)]++
            }

            const key = array.join("#")
            if (!map.has(key)) map.set(key,[]) //initialize
            map.get(key).push(str) // insert
        }
        return Array.from(map.values()) // Map value group to array

    }
}
