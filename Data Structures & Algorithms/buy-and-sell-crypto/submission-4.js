class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let l = 0
        let r = 1

        while( r < prices.length ){
            while(l < r && prices[r] <= prices[l]) {
                l++
            }
            if( l < r && prices[l] < prices[r]){
                maxProfit = Math.max( maxProfit, prices[r] - prices[l])
            }
            r++
        }
        return maxProfit
    }
}
