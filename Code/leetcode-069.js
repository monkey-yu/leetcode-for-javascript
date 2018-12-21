/**
 * @param {number} x
 * @return {number}
 */
// 对一个数开平方根，并向下取整
var mySqrt = function(x) {
    // Math.sqrt 开平方根方法； Math.floor向下取整方法
    var s=Math.sqrt(x);
    return Math.floor(s);
};