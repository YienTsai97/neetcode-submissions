class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0 
        let r = 1
        let maxProfit = 0

        while (r < prices.length){
            let profit = prices[r] - prices[l] // means the value of r > l
            if( profit > 0 ){
                maxProfit = Math.max(maxProfit, profit)
            } else {
                l = r // set new buying date because the price at r is lower (or equal) with l
            }
            r++
        }
        return maxProfit
    }
}
