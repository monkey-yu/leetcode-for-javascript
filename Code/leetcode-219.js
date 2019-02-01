/*
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//方法一：arr.includes（） 包含
var containsNearbyDuplicate = function (nums, k) {

  var arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) return true;
    arr.push(nums[i]);
    if (arr.length > k) {
      arr.shift();
    }
  }
  return false;

};
// 方法二
var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    map[v] = map[v] || [];
    map[v].push(i);
  }

  for (let key in map) {
    for (let i = 0; i < map[key].length - 1; i++) {
      if (map[key][i + 1] - map[key][i] <= k) return true;
    }
  }

  return false;
}