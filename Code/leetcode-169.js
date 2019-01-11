/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组中重复最多项的元素
//  Input [3,2,3]     // Output 3
// 方法一 ： 84ms
var majorityElement = function(nums) {
    // 开辟2个内存地址 分别存放元素，和该元素出现的个数
    var elements =[];
    var count = [];
    for(var i=0;i<nums.length;i++){
        var item = nums[i];
        if(elements.indexOf(item) <0){
            elements.push(item);
            count.push(1);
        }else{
            count[elements.indexOf(item)]++
        }
    }
    console.log(elements);
    console.log(count);
    // 获取count 中的最大值的索引，对应到元素数组中取得结果
    var maxCount = Math.max.apply(null,count);
    var index = count.indexOf(maxCount);
    return elements[index];
   
};
// 方法二：76ms
var majorityElement = function(nums) {
    let majority = nums[0];
    let   count = 1;
   for(let i=1;i<nums.length;i++){
       if(majority === nums[i]){
           count ++
       }else{
           count --;
           if(count == 0){
               majority = nums[i];
               count++;
           }
       }
   }
   return majority;
}