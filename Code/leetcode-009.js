/**
 * @param {number} x
 * @return {boolean}
 */

 // 回文数  即正反念是一样的。 比如 121，34543
var isPalindrome = function(x) {
    var reverseNum =0;
     var origin =x;
    if(x < 0 || (x %10 == 0 && x !=0)) {
        return false;
    }else{
        while(x){
            reverseNum = reverseNum *10 + x % 10;
            // Math.trunc 方法会将数字的小数部分去掉，只保留整数部分。
            x = Math.trunc(x/10)
        }
        return reverseNum == origin
  
    }
 };