function calculateTax(amount: number): number{
    return amount * 1.2;
}

function writePrice(product: string, price: number): void{
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

//#region 陣列 - 指定型別
// let prices: number[] = [100, 75, 42];
// let names: Array<string> = ["Hat", "Gloves", "Umbrella"]; // 泛型寫法

// forEach 第一個參數: 陣列值, 第二個參數: 陣列位置, 第三個參數: 陣列本身
// prices.forEach(
//     (price: number, index: number) => {
//         writePrice(names[index], calculateTax(price));
//     }
// );
// names.forEach(
//     (name: string, index: number) => {
//         writePrice(name, calculateTax(prices[index]));
//     }
// );
// 效果相等
// for (var i=0;i<3; i++){
//     writePrice(names[i], calculateTax(prices[i]));
// }
//#endregion

//#region 陣列 - 推斷型別 => TS會依據初始型別自動推斷型別 可看index.d.ts
// let prices = [100, 75, 42];
// let names = ["Hat", "Gloves", "Umbrella"]; // 泛型寫法

// // forEach 第一個參數: 陣列值, 第二個參數: 陣列位置, 第三個參數: 陣列本身
// prices.forEach(
//     (price, index) => {
//         writePrice(names[index], calculateTax(price));
//     }
// );
//#endregion

//#region 陣列 - 推斷型別錯誤 => TS會自動推斷型別聯集 可看index.d.ts => 最好還是做型別註記避免此問題
// let prices = [100, 75, 42, "20"]; // 加入字串元素
// let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];

// // forEach 第一個參數: 陣列值, 第二個參數: 陣列位置, 第三個參數: 陣列本身
// prices.forEach(
//     (price, index) => {
//         writePrice(names[index], calculateTax(price));
//     }
// );
//#endregion

//#region 陣列 - 空陣列問題
// let prices = []; // => 空陣列推為any
// prices.push(...[100, 75, 42, "20"]); // 加陣列元素至空陣列，因推為any，加字串也能，乘法算符自動強制轉型為number
// let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
// prices.forEach((price, index) => {
//     writePrice(names[index], calculateTax(price));
// });
//#endregion

//#region 陣列 - nerver
// let prices = [] as number[]; // => 空陣列 "strictNullChecks": true, 推為never, 在型別斷言活設定初始值前, 無法用
// prices.push(...[100, 75, 42, 20]);
// let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
// prices.forEach((price, index) => {
//     writePrice(names[index], calculateTax(price));
// });
//#endregion

//#region 元祖(tuple) - 長度固定的陣列 每個元素可為不同型別 編譯完轉為js的一般陣列
// let hat: [string, number] = ["Hat", 100]; // 有型別註記才會是tuple
// let hat: [product: string, price: number] = ["Hat", 100]; // 標籤增加可讀性，但無法用來取值
// let gloves: [string, number] = ["Gloves", 75];
// writePrice(hat[0], hat[1]);
// // 由於轉js後為一般陣列, 因此可用一般陣列方法
// hat.forEach((h:string| number) => {
//     if(typeof h === "string"){
//         console.log(`String: ${h}`);
//     } else {
//         console.log(`Number: ${h.toFixed(2)}`);
//     }
// })
//#endregion

//#region 元祖(tuple) - 以元祖作為陣列元素
let products: [string, number][] = [["Hat", 100], ["Gloves", 75]]; 
// 以型別聯集為元素的陣列
let tupleUnion: ([string, number] | boolean)[] = [true, false, ["Hat", 100], ...products];

// 走訪並做型別防衛
tupleUnion.forEach((elem: [string, number] | boolean) => {
    if (elem instanceof Array) { // 若為陣列
        elem.forEach((tupleElem: string | number) => {
            if (typeof tupleElem === "string"){
                console.log(`String Value: ${tupleElem}`);
            } else {
                console.log(`Number Value: ${tupleElem}`);
            }
        });
    } else if (typeof elem === "boolean"){ // 若為布林
        console.log(`Boolean Value: ${elem}`);
    }
});
//#endregion