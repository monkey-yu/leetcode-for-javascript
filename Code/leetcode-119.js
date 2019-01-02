/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 杨辉三角2 输入n,返回第n列的值。索引从0开始
var getRow = function(rowIndex) {
    var res=[1];
    for(var i=1;i<rowIndex+1;i++){
        res[i] = res[i-1]*(rowIndex-i+1)/i;
    }
    return res;
};
