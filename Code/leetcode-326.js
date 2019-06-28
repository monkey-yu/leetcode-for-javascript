/**
 * @param {number} n
 * @return {boolean}
 */
// 是否为3的幂数
// input 27 output true
// 数学知识： log(a)(x) / log(a)(y) = log(y)(x)
// 两个同底对数相除，使用换底公式
// 例： log10(27)/log10(3) = log3(27) = 3
var isPowerOfThree = function(n) {
  return Math.log10(n) / Math.log10(3) % 1 == 0 
};