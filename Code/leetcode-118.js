/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 杨辉三角
// Input: 3   Output:[[1],[1,1][1,2,1]]
// Input: 4   Output:[[1],[1,1][1,2,1],[1,3,3,1]]
var generate = function(numRows) {
    var res =[];
    let i =0;
    while(i < numRows){
        res[i] = new Array(i+1);
        res[i][0] =1;
        res[i][i] =1;
        if(i > 1){
            for(let j =1;j< res[i].length-1;j++){
                res[i][j] = res[i-1][j-1]+ res[i-1][j]
            }
        }
        i++;
    }
    return res;
};