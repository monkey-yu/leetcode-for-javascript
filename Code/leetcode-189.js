/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 旋转数组
// 方法一：用splice截取后k位数，用concat 连接原数组。 splice方法后会返回被删除的项目，并且会改变原数组。
//  该方法浏览器执行成功，leetcode提交失败。
var rotate = function(nums, k) {
    var res = [];
    var splice_nums = nums.splice(-k);
    res = splice_nums.concat(nums);
    return res;
};
// 方法二：unshift向数组开头添加元素，splice返回被删除的的k项。
var rotate = function(nums, k) {
    let index = nums.length-k;
      nums.unshift(...nums.splice(index,k))
  };
  