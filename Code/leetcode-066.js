/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 加一 
// 9  -> 10;      129 -> 130; 123 -> 124;
var plusOne = function(digits) {
    // 思路： 数组逆向遍历，取到值为9 的，判断是索引为0，则讲该项置为0，前面添加1。 如果值不是9，则直接+1. 
    for(var i=digits.length-1;i>=0;i--){
        if(digits[i] == 9){
            digits[i] = 0;
            if(i == 0){digits.unshift(1)}
        }else{
            digits[i] ++ ;
            break
        }    
    }
      return digits;
};