/**
 * @param {number} n
 * @return {number}
 */
 // 阶乘后的0 
var trailingZeroes = function(n) {
    var cur = 5,
        total = 0;
    
    while (cur <= n) {
        total += Math.floor(n / cur);
        cur *= 5;
    }
    
    return total;
};
