// 1.代码冲突
var a = 1;
var b = function(){
    return a++;
}
var c = b();

// 2.测试本地分支
var d = '这是text分支修改的代码，切换到master分支后不应该有此代码';
