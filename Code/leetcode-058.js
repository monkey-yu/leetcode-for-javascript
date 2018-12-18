/**
 * @param {string} s
 * @return {number}
 */
// 取最后单词的长度
// Input : 'hello world'     output： 5
// Input: 'a '               output:1
var lengthOfLastWord = function(s) {
    // 用.trim去掉头尾空格 ，然后拆分成数组
    var strArr = s.trim().split(' '); 
    return strArr[strArr.length -1].length; 
};