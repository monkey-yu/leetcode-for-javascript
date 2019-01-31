/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 数组中是否包含重复项  
// Input: [1,2,3,1]  Output:true
// Input: [1,2,3]  Output:false
// 方法一： 新建数组 indexOf 查找
var containsDuplicate = function(nums) {
  var another =[]
  for(let i =0;i<nums.length;i++){
      if(another.indexOf(nums[i]) <0){
          another.push(nums[i])
      }else{
          return true
      }
  }
  return false;
};
// 方法二： 使用Set数据格式及其size属性
var containsDuplicate = function(nums) {
  return new Set(nums).size == nums.length ? false : true
};