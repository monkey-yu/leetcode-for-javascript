/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 反转2进制
// number.toString(2) 将数字转为2进制
// padStart(32,'0') 总长度为32,不够的头上填充‘0’
// parseInt(string,2) 解析一个字符串返回为整数，2进制的
var reverseBits = function(n) {
  const str = n.toString(2).padStart(32,'0');
   return parseInt(str.split('').reverse().join(''),2)
};