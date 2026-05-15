class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length:9}, () => new Set())
        const cols = Array.from({length:9}, () => new Set())
        const boxs = new Map()

        for(let r = 0 ; r < 9 ; r++ ){
            for(let c = 0 ; c < 9 ; c++){
                const v = board[r][c]
                if(v === ".") continue

                const boxKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
                if(!boxs.has(boxKey)) boxs.set(boxKey, new Set())

                if(rows[r].has(v) || cols[c].has(v) || boxs.get(boxKey).has(v)){
                    return false
                } else {
                    rows[r].add(v)
                    cols[c].add(v)
                    boxs.get(boxKey).add(v)
                }
            }
        }
        return true
    }
}
