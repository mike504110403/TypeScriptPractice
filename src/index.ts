// 基本類型
let str: string = "test";
let num: number = 999;
let boo: boolean = true;
let n: null = null;
let un: undefined = undefined;
let test: any = true;

// 陣列
let arr: string[] = ['a', 'b'];
let arr2: string[][] = [['aa', 'bb']];

// 元祖
let tuple: [number, string, boolean] = [1, 'a', true];
let tuple3: [string, boolean][] = [['a', true]];

// 枚舉
enum TestStatus{
    SUCCESS = 0,
    FAIL = -2,
    RUNNING = 1
};

const staus = TestStatus.FAIL;
console.log(staus);

// Union
let aaa: number | string;
aaa = 1000;
aaa = 'str';
//aaa = true;

// 類型
type A = number | string;
let a1: A;
aaa = 1000;
aaa = 'str';
//aaa = true;

// 介面
interface User{
    name: string;
    age: number;
}
const obj3: User = {
    name: 'ㄚ寶',
    age: 2
}

// 物件
// type不能擴充
type Card = {
    name: string;
    desc: string;
}
interface Card2 {
    name: string;
    desc: string;
}
// inteface可擴充 - 繼承
interface Card2 {
    age?: number; // 可選
}

const obj: Card = {
    name: 'ㄚ寶',
    desc: '...'
}
const obj2: Card2 = {
    name: 'ㄚ寶',
    desc: '...',
    age: 2
}

function hello(a: string, b: string): number{
    return 100;
}

function hello2(name: string, age?: number){
    let a: number;
    if (age === undefined) return -1;
    a = age;
    return age;
}
// 箭頭含式
const func = () => {
    return 1
}