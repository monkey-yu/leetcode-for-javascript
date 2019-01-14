/**
 * @param {string} s
 * @return {number}
 */
// excel表头转数字
//   A -> 1     AA -> 27
// Math.pow(10,n)  表示10的n次方
var titleToNumber = function(s) {
    var sum = 0;
    var count =0;
    for(let i = s.length-1;i>=0;i--){
        sum += (s.charCodeAt(i)-64)*Math.pow(26,count);       
        count +=1;     
    }
    return sum;
};