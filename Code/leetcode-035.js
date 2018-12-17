/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 查找target 在nums中存在的位置，若不存在，返回插入的位置。 nums是有序的数组
var searchInsert = function(nums, target) {
    if(target === 0){
        return 0;
    };
    for(let i=0;i<nums.length;i++){
        
        if(nums[i] === target){
            return i;
        }else{
            if(nums[0] > target){
                return 0;
            }
            else if(nums[i] < target && nums[i+1] > target){
                return i+1;
            }else if(nums[nums.length-1] < target){
                return nums.length;
            }
        }
    }
};