/**
 * @param {number[]} nums
 * @return {number}
 */
// input 有序数组 0，1，2，3...n
// output 数组中漏掉一个数
// 方法一： 循环nums的长度，return 不包含在nums数组里的那个元素
var missingNumber = function(nums) {
  let len = nums.length;
  for(let i =0;i<=len;i++){
      if(!nums.includes(i)){
          return i
      }
  }
};

// 方法二： 正常有序的数组和相加为n*(n+1)/2，传入的数组各元素累加使用reduce求出，两者相减得到漏掉的数字
var missingNumber = function(nums) {
  let len = nums.length;
  let sum1 = len*(len+1)/2;
  let sum2 = nums.reduce((a,c)=> a+c);
  return sum1 -sum2;
};