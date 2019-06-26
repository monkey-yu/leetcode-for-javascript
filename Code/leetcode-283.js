/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 将数组里的0移到末尾去,其他数顺序不变
// input [0,1,0,3,12]
// output [1,3,12,0,0]
var moveZeroes = function(nums) {
  let j=0;
  for(let i=0;i<nums.length;i++){
      if(nums[i] !== 0 ){
          nums[j] = nums[i];
          if(i>j){ nums[i] = 0};
          j++;
      }
  }
  return nums;
};