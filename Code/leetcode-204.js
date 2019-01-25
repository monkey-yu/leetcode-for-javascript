/**
 * @param {number} n
 * @return {number}
 */
// 数质数
// Input:10  Output：4  （分别是2，3，5，7）
var countPrimes = function(n) {
  let count = 0;
  let nums = [];
  for(let i=2;i<n;i++){
      if(nums[i] === undefined){
          count++;
          for(let j =1;i*j <n;j++){
              nums[i*j] =1;
          }
      }
  }
  return count;
};