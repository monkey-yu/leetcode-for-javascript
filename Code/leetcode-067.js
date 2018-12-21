/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 二进制相加
// 思路：两个二进制字符串反向循环，创建2个指针，一个carry用来存储前一位相加进1 的数，ret用来存储他两相加后该位数应该显示的值
var addBinary = function(a, b) {
    let carry =0,ret = '',i=a.length-1,j=b.length-1;
      while(i>=0 || j >=0){
          let sum = carry + (i>=0 ? parseInt(a[i--]) : 0) + (j>=0 ? parseInt(b[j--]) : 0);
          carry = sum >=2 ? 1 : 0;
          ret = (sum %2) + ret;
      }
      return (carry === 1 ? 1:'')+ ret;
  };