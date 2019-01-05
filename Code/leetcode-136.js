/**
 * @param {number[]} nums
 * @return {number}
 */
// 获取数组中的单个数
  // 第一种方法：新辟内存，存放当前数组里没有的，否则删掉数组里已有的该项
var singleNumber = function(nums) {
    var newArr = [];
    for(var i =0;i<nums.length;i++){
        const cur = nums[i];
        if(newArr.indexOf(cur) === -1){
            newArr.push(cur);
        }else{
            var removeIndex = newArr.indexOf(cur);
            newArr.splice(removeIndex,1)
        }
    }
    return newArr[0];
};
  // 第二种方法：先排序,后两个相近的索引去比较
var singleNumber = function(nums) {
    nums= nums.sort((a,b) => a-b);
    console.log(nums);
    for(var i =0;i<nums.length;i++){
        if(nums[i] !== nums[i+1]){       
           return nums[i]
        }
        i+=1;
    }
}
  // 第三种方法：异或处理 
//    a ^ a = 0
//   a ^ b ^ a  = b
  var singleNumber = function(nums) {
    return nums.reduce((total,num) => {
        return total ^ num
    });
  }