class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0

        let r = 1
        let l = 0

        while(r < prices.length){
            const curr = prices[r] - prices[l]
            max = Math.max(max, curr)
            if(curr < 0) l=r
            r++
        }
        return max
    }
}
