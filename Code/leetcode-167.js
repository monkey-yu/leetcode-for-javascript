/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 升序数组中的2数之和为目标值
// 方法一 460ms
var twoSum = function(numbers, target) {
    var anotherArr = [numbers[0]];
    var res = [];
    for(var i =1;i<numbers.length;i++){
        if(anotherArr.indexOf(target-numbers[i]) == -1){
            anotherArr.push(numbers[i]);
        }else{
            res= [i+1,anotherArr.indexOf(target-numbers[i])+1];
        }
    }
    return res.sort((a,b) => a-b);
};
// 方法二 56ms
var twoSum = function(numbers, target) {
    i = 0;
    j = numbers.length -1;
    while(i < j){
        sum = numbers[i] + numbers[j];
        if(sum == target){
            return [i+1,j+1]
        }else if(sum > target){
            j--
        }else{
            i++;
        }
    }
}