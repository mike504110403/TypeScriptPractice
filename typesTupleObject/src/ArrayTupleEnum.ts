function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
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
// let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
// // 以型別聯集為元素的陣列
// let tupleUnion: ([string, number] | boolean)[] = [true, false, ["Hat", 100], ...products];

// // 走訪並做型別防衛
// tupleUnion.forEach((elem: [string, number] | boolean) => {
//     if (elem instanceof Array) { // 若為陣列
//         elem.forEach((tupleElem: string | number) => {
//             if (typeof tupleElem === "string"){
//                 console.log(`String Value: ${tupleElem}`);
//             } else {
//                 console.log(`Number Value: ${tupleElem}`);
//             }
//         });
//     } else if (typeof elem === "boolean"){ // 若為布林
//         console.log(`Boolean Value: ${elem}`);
//     }
// });
//#endregion

//#region 列舉 enum
// enum Product { // 依序從0開始列舉
//   Hat, // 0
//   Gloves, // 1
//   Umbrella, // 2
// }
// enum Type {
//   Hiphop = 0,
//   Vapor = 0, // 值可以重複
//   KPOP = 666, // 也可以自定義值
//   Metal, // 沒定義自動+1
//   British = -1, // 也可以給負值
//   Cowboy,
//   Gothique = 0.2, // 非整數也行
//   Classical,
// }
// enum City { // 值也可給字串
//   Lodon = "London",
//   Paris = "Paris",
//   NY = "New York",
// }
// enum內沒值無法指派
// let city: City = "Berlin";
// let product: Type = 1;
// console.log(`City: ${City.Lodon}`);
// console.log(`City: ${City["Paris"]}`);

// let products: [Product, number][] = [
//   [Product.Hat, 100],
//   [Product.Gloves, 75],
// ];

// [Product.Hat, Product.Gloves, Product.Umbrella].forEach((val) => {
//   console.log(`Number value: ${val}, type ${typeof val}`);
// });

// products.forEach((prod: [Product, number]) => {
//   switch (prod[0]) {
//     case Product.Hat:
//       writePrice("Hat", calculateTax(prod[1]));
//       break;
//     case Product.Gloves:
//       writePrice("Gloves", calculateTax(prod[1]));
//       break;
//     case Product.Umbrella:
//       writePrice("Umbrella", calculateTax(prod[1]));
//       break;
//   }
// });

// let productVlaue: Product = 0;
// let productName: string = Product[productVlaue];
// console.log(`Value: ${productVlaue}, Name: ${productName}`);

// let typeValue: Type = 0;
//console.log(productVlaue==typeValue); // 還是會比型別，所以會報錯

// 型別防衛派不上用場
// let productValue: Product = Product.Hat;
// if (typeof productValue === "number") {
//   // typeof還是會吃js的型別
//   console.log("Value is a number");
// }
// let unionValue: number | Product = Product.Hat;
// if (typeof unionValue === "number") {
//   console.log("Value is a number");
// }
//#endregion

//#region  列舉常數
// const enum Product { // 加const來讓js不用物件來實作enum 而是直接給常數
//   Hat,
//   Gloves,
//   Umbrella,
// }
// let productValue: Product = Product.Hat; // 此時js中為常數number
// console.log(productValue);

// productValue = Product["Gloves"];
// console.log(productValue);

//let productName: string = Product[2]; // 常數設定後無法反向取值 因為js不是物件了
//console.log(productName);
//#endregion

//#region 字面值型別
// let restrictedValue: 1 | 2 | 3 = 3;
//restrictedValue = 100; // 字面型別不可指派宣告以外的值
// console.log(`Value: ${restrictedValue}`);

// function calculatePrice(quantity: 1 | 2, price: number): number {
//   // 限制傳入的值
//   return quantity * price;
// }

// let total = calculatePrice(2, 19.99);
// //let nTotal = calculatePrice(0, 19.99); // 傳入字面型別以外的值 報錯
// console.log(total);

// function getRandomValue(): 1 | 2 | 3 | 4 {
//   return (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4;
// }
// enum City {
//   London = "LON",
//   Paris = "PAR",
//   Chicago = "CHI",
// }
// function getMixedValue(): 1 | "Hello" | true | City.London {
//   // 指定回傳型別 且可混和型別
//   switch (getRandomValue()) {
//     case 1:
//       return 1;
//     case 2:
//       return "Hello";
//     case 3:
//       return true;
//     case 4:
//       return City.London;
//   }
// }
// console.log(`Value: ${getMixedValue()}`);

// // 型別多載也能透過字面值型別設定
// function getMixedValue2(input: 1): 1;
// function getMixedValue2(input: 2 | 3): "Hello" | true;
// function getMixedValue2(input: 4): City.London;
// function getMixedValue2(input: number): number | string | boolean | City {
//   // 指定回傳型別 且可混和型別
//   switch (getRandomValue()) {
//     case 1:
//       return 1;
//     case 2:
//       return "Hello";
//     case 3:
//       return true;
//     case 4:
//       return City.London;
//   }
// }

//#endregion

//#region 型別別名
enum City {
  London = "LON",
  Paris = "PAR",
  Chicago = "CHI",
}
type comboType = 1 | 2 | 3 | City.London;
type comboTupleType = [string, number | boolean, comboType];

let result: comboTupleType[] = [
  ["Apples", 100, 2],
  ["Orange", true, City.London],
];
result.forEach((item: comboTupleType) => {
  console.log(`Result: ${item}`);
});
//#endregion
