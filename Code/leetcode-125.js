/**
 * @param {string} s
 * @return {boolean}
 */
// 验证回文串 
// Input: "A man, a plan, a canal: Panama"
// Output: true
var isPalindrome = function(s) {
    // 第一步：正则匹配替换非数字字母的为空，然后转小写
    s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    console.log(s);
    // 第二步：从头和尾索引去验证是否相等，只要不想等则返回false
    var i = 0,j=s.length-1;
    if(!s.length) return true;
    while(i<j){
        if(s[i++] !== s[j--]){
            return false;
        }
    }
    return true;
};