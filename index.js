// 1.代码冲突
var a = 1;
var b = function(){
    return a++;
}
var c = b();