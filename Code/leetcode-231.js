/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
//     ES6 提供Number.isInteger（）方法判断是否为整数
//     Math.log2(n) 取n的log2 对数
    return Number.isInteger(Math.log2(n))
};
