/**
 * @param {number} num
 * @return {number}
 */
// 各位数相加 最后是个位数
//  Input:38 , Output： 2  解释：3 + 8 = 11， 1+1 =2
var addDigits = function(num) {
  var num =num.toString().split('').reduce((a,b)=>parseInt(a)+parseInt(b));
  return num.toString().split('').length >1 ? addDigits(num) : num
};