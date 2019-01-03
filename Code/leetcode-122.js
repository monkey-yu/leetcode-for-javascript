/**
 * @param {number[]} prices
 * @return {number}
 */
// 多次买卖股票获取最大收益值
// 方法一： o(n) 复杂度
var maxProfit = function(prices) {
    var sum = 0;
    for(var i =1;i<prices.length;i++){
        if(prices[i] > prices[i-1]){
            sum += (prices[i] - prices[i-1])
        }
    }
    return sum;
};
// 方法二 ES6
// reduce() 方法对数组中的每个元素执行一个由您提供的函数(升序执行)，将其结果汇总为单个返回值。
// reduce() 方法内包含4个参数，累计器、当前处理元素、当前的索引（可选）、array(可选)
// 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。这里是最后的0
var maxProfit = function(prices) {
    return prices.reduce((sum,current,index,arr) => {
        const next = arr[index + 1];
        return current < next ? sum + next-current : sum;
    },0)
}
