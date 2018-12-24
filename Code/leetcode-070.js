/**
 * @param {number} n
 * @return {number}
 */
// 爬楼梯
// 笔试了下，数据正好符合斐波那契数列，因此就采用处理斐波那契的方式解决，返回数组中的最后一位，即输出值
var climbStairs = function(n) {
    var filb =[1,1];
     for(var i =2;i<=n;i++){
         filb.push(filb[i-1]+filb[i-2]);
     }
     return filb.pop();
 };