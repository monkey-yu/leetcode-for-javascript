/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// 单词匹配 
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
var wordPattern = function(pattern, str) {
  let strArr = str.split(' ');
  let patArr = pattern.split('');
  let map = {};
  let container = [];
  if(strArr.length !== patArr.length){ return false}
  for(let i=0;i< strArr.length;i++){
      if(map.hasOwnProperty(patArr[i])){
          if(map[patArr[i]] !== strArr[i]){
              return false
          }else{
              continue;
          }
      }else{
          if(!container.some(item => {
              return item === strArr[i]
          })){
            // 使用对象，用key,value形式对存储
              map[patArr[i]] = strArr[i];
              container.push(strArr[i]);
          }else{
              return false;
          }
      }
  }
  return true;
};