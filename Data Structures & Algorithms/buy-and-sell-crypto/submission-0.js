class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]
        let maxProfit = 0

        for( let i = 1; i < prices.length ; i++){ // 從index1開始算是因為整個loop是在求sell date
            let profit = prices[i] - minPrice
            maxProfit = Math.max( maxProfit, profit)
            minPrice = Math.min( minPrice, prices[i])//初始等同是index[0]在跟index[1]比較，若右側值大則覆蓋最小賣出值
        }
        return maxProfit
    }
}
