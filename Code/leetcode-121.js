/**
 * @param {number[]} prices
 * @return {number}
 */
// 买卖股票的最佳时间
// Input: [7,1,5,3,6,4]
// Output: 5 输出的是最大收益，1时候买入，6时候卖出
// 暴力解法
var maxProfit = function(prices) {
    let maxP = 0;
    for(var i=0;i<prices.length;i++){
        for(var j=i+1;j<prices.length;j++){
            let profit = prices[j] -prices[i]
            if(profit > maxP) {
                maxP = profit
            }
        
        }
       
    }
    return maxP;  
};
// one pass 解法
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let i = 0;i<prices.length;i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
      
    }
      return maxProfit;
};