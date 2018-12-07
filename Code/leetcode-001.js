/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力解题法。 复杂度 n^2
var twoSum = function(nums, target) {
    for(var i =0;i<nums.length -1;++i){
        for(var j =i+1;j<nums.length;++j){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

// 复杂度 n (方法2更好)
// 测试例子： nums=[2,7,11,1,3,]   9  最后结果是：[0,1]
var twoSum2 = function(nums, target) {
    //  obj用来存储nums的值和索引
    var obj ={}
    for(var i =0;i<nums.length;i++){
        if(obj[target - nums[i]] !== undefined){
            return [obj[target - nums[i]],i]
        }
        if(!obj[nums[i]]){
            // 当i =0 时，obj={2:0}
           obj[nums[i]] = i;
        }
    }
};
