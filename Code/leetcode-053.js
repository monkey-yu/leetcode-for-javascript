/**
 * @param {number[]} nums
 * @return {number}
 */
// 获取最大子序列和 例如：[-2,1,-3,4,-1,2,1,-5,4]  Output:6 , 即 6 =[4,-1,2,1]
 
var maxSubArray = function(nums) {
    var hash ={0:nums[0]};
    let max =nums[0];
    for(var i =1;i<nums.length;i++){
        // 每次数组当前项 + 上一项的和 与 当前项做比较，大的一项存入到hash中。
        hash[i] = Math.max(hash[i-1]+nums[i],nums[i]);
        // 拿hash里的值与第一位比较，取得最大值。
        max = Math.max(hash[i],max);
    }
    return max;
};