/**
 * @param {number} n
 * @return {string}
 */
// 报数 
var countAndSay = function (n) {
    var result = '1';
    for (var i = 2; i <= n; i++) {
        result = countFun(result);
    }
    function countFun(Preresult) {
        var count = 0;
        var currentResult = '';
        for (var i = 0; i < Preresult.length; i++) {
            count++;
            if (Preresult[i + 1] != Preresult[i]) {
                currentResult += count + Preresult[i];
                count = 0;
            }
        }
        console.log('currentResult', currentResult);
        return currentResult;
    };

    return result;
};