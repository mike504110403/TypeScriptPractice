// 基本類型
var str = "test";
var num = 999;
var boo = true;
var n = null;
var un = undefined;
var test = true;
// 陣列
var arr = ['a', 'b'];
var arr2 = [['aa', 'bb']];
// 元祖
var tuple = [1, 'a', true];
var tuple3 = [['a', true]];
// 枚舉
var TestStatus;
(function (TestStatus) {
    TestStatus[TestStatus["SUCCESS"] = 0] = "SUCCESS";
    TestStatus[TestStatus["FAIL"] = -2] = "FAIL";
    TestStatus[TestStatus["RUNNING"] = 1] = "RUNNING";
})(TestStatus || (TestStatus = {}));
;
var staus = TestStatus.FAIL;
console.log(staus);
// Union
var aaa;
aaa = 1000;
aaa = 'str';
var a1;
aaa = 1000;
aaa = 'str';
var obj3 = {
    name: 'ㄚ寶',
    age: 2
};
var obj = {
    name: 'ㄚ寶',
    desc: '...'
};
var obj2 = {
    name: 'ㄚ寶',
    desc: '...',
    age: 2
};
function hello(a, b) {
    return 100;
}
function hello2(name, age) {
    var a;
    if (age === undefined)
        return -1;
    a = age;
    return age;
}
// 箭頭含式
var func = function () {
    return 1;
};
