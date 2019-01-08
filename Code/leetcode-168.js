/**
 * @param {number} n
 * @return {string}
 */
// Excel表列名称 输入正整数返回字母
// 1 -> A  2 -> B  26 -> Z   27 -> AA
var convertToTitle = function(n) {
    if(n<=26){
        // String.fromCharCode（） 将ASCII码转换为字母
        return String.fromCharCode(64 + n);
    }
    else{
        // Math.trunc（） 将值进行取整，去掉小数位
          let que = Math.trunc(n /26);
          let reminder = n %26;
          if(reminder === 0){
              reminder =26;
              que --;
          }
          var res ='';
        //   回调自己 convertToTitle（）
          res += convertToTitle(que) + String.fromCharCode(64 + reminder);
           return res;
    }
  };