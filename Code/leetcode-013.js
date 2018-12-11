/**
 * @param {string} s
 * @return {number}
 */
// 计算罗马数 
var romanToInt = function(s) {
    var value ={ I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    var sum =0 ;
    for(var i=0;i<s.length;i++){
        // charAt() 方法可返回指定位置的字符
        const current = value[s.charAt(i)];
        const next = value[s.charAt(i+1)];
        //  IV = 4 = 5-1
        if(current < next){
            sum += next -current;
            //  让 i +1 跳过下一个索引
            i += 1;
        }else{
            sum += current
        }
    };  
    return sum;
};