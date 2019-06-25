/**
 * @param {number} num
 * @return {boolean}
 */
// 一个数的因数只由2，3，5组成的数叫做丑数。返回 true 
var isUgly = function(num) {
  if(num<= 0){
      return false;
  }
  if(num == 1) { 
    return true;
  }
  let factors =[2,3,5];
  let f = 0;
  let result = false;
  while(f<factors.length){
      while(num% factors[f] == 0){
          num = num / factors[f];
          result = true;
      };
      f++;
  }
  return result && (num==1)
};