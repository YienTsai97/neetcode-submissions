class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from( {length:9} , ()=> new Set())
        const cols = Array.from( {length:9} , ()=> new Set())
        const boxs = new Map()

        for(let r = 0 ; r < 9 ; r++){
            for(let c = 0 ; c < 9 ; c++){
            
            // check value has num or not
            const value = board[r][c]
            if (value === ".") continue

            let boxKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
            if (!boxs.has(boxKey)) boxs.set(boxKey, new Set())

            //check rows/cols/boxs has duplicates 
            // if not, add/set
            if (cols[c].has(value) || rows[r].has(value) || boxs.get(boxKey).has(value)) return false
            
            cols[c].add(value)
            rows[r].add(value)
            boxs.get(boxKey).add(value)
            }
        }
        return true
    }
}
