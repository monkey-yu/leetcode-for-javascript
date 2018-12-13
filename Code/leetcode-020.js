/**
 * @param {string} s
 * @return {boolean}
 */
// 有效的括号  
// 思路：运用堆栈的方法。如果括号匹配，则消掉，最后数组为空，是true ，否则 false
var isValid = function(s) {
    let obj={
       '(':')',
        '[':']',
        '{':'}'
    };
    let stack = [];
    for(let i = 0; i< s.length;i++){
        if(s.charAt(i) in obj){
            stack.push(s.charAt(i));
        }else{
            // pop方法是从数组末尾删除一项，返回被删除的这项。原数组长度减一
           const key = stack.pop();
            if(s.charAt(i) == obj[key]){
                continue
            }else{
                return false
            }
        }
    };
    return stack.length == 0;
}
