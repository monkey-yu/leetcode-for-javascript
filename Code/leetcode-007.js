/**
 * @param {number} x
 * @return {number}
 */
// Math.pow(2,31) 表示2^31.
// 注意反转后的值不要溢出，溢出显示为0 。
var reverse = function(x) {  
    var result= parseInt(x.toString().split('').reverse().join('')); 
    if(result> Math.pow(2,31)-1 || -result< Math.pow(-2,31) ){
        return 0
    }else{
        return x>0 ? result :-result
    }      
};
