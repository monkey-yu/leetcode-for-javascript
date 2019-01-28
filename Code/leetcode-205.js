/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 同构字符串
// Input: s = "egg", t = "add"    Output: true
// Input: s = "foo", t = "bar"    Output: false
// 对数组的浅拷贝，创建了一个新实例
var isIsomorphic = function(s, t) {
  let sArray = Array.from(s);
  let tArray = Array.from(t);
  function checkArray(sArray,tArray){
      let obj = {};
      for(let i =0;i<sArray.length;i++){
          if(!obj[sArray[i]]){
              obj[sArray[i]] = tArray[i]
          }else{
              if(obj[sArray[i]] != tArray[i]){
                  return false;
              }
          }
          
      }
      return true;
  }
  return checkArray(sArray,tArray) && checkArray(tArray,sArray);
};