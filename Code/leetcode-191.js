/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 2进制中1的数量
// 方法一
var hammingWeight = function(n) {
  const arr= n.toString(2).split('');
  var count = 0;
  for(let i = 0;i<arr.length;i++){
      if(arr[i] == '1'){
          count +=1;
      }
  }
  return count;
};
// 方法二  移位运算
var hammingWeight = function(n) {
  let count = 0;
  while(n){
      count += n &1;
      n = n >>>1;
  }
  return count;
}