/**
 * @param {string[]} strs
 * @return {string}
 */
// 获取数组里最长公共字符串 
// Input: ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return ''
    };
    // charTestFunc函数用来遍历字符串索引的值
    let charTestFunc = index =>{
        const firstChar = strs[0].charAt(index);
        if(!firstChar){
            return ''
        };
        // for循环用来遍历数组里每项字符串
        for (let i=1;i<strs.length;i++){
            if(strs[i].charAt(index) !== firstChar){
                return ''
            }
        }
        return firstChar + charTestFunc(index +1)
    }
    // 记得用return
    return charTestFunc(0);
}