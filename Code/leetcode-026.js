/**
 * @param {number[]} nums
 * @return {number}
 */
// 删除数组中的重复项
var removeDuplicates = function(nums) {
    // 方法一： 浏览器环境成功，领扣提交错误
    // 排序方法 
    nums = nums.sort();
    for(var i =1;i<nums.length;i++){
       if(nums[i] === nums[i-1]){
            nums.splice(i,1 );
       }
     }
   console.log('nums',nums);
   return nums;
    // 方法二：浏览器环境成功，领扣提交错误    
    // Set格式
     const s = new Set(nums);
     console.log([...s]);
     return [...s];
    //  方法三：提交成功
    var obj = {}
    for (var i = 0; i < nums.length; i++) {
     if (typeof obj[nums[i]] === 'undefined') {
       obj[nums[i]] = true
     } else {
       nums.splice(i, 1)
       i--
     }
   }
   return nums.length;
    // 方法四：indexOf判断
    var arr =[];
    for(var i=0;i<nums.length;i++){
        if(arr.indexOf(nums[i]) >=0){
            continue
        }else{
            arr.push(nums[i]);
        }
          
    }
    console.log('arr',arr);
    return arr;
 };