// 定義物件用的列舉
// enum Feature {
//   Waterproof,
//   Insulated,
//   None,
// }

// // 定義型別別名
// type Product = {
//   id: number;
//   name: string;
//   price?: number;
//   feature: Feature;
//   hasFeature?(f: Feature): boolean;
// };
// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };
// // 等於 Product|Person
// type UnionType = {
//   id: number | string;
//   name: string;
// };

// let hat = { id: 1, name: "Hat", price: 100, feature: Feature.None }; // shape
// let gloves = { id: 2, name: "Gloves", price: 75, feature: Feature.Insulated };
// let umbrella = {
//   id: 3,
//   name: "Umbrella",
//   price: 30,
//   feature: Feature.Waterproof,
//   hasFeature: function (checkFeature) {
//     // 加入物件方法
//     return this.feature === checkFeature;
//   },
// }; // 缺少price shape不同 報錯

// // 多型別註記以外的屬性
// let shades: Product = {
//   id: 5,
//   name: "Sunglasses",
//   price: 54,
//   feature: Feature.None,
//   finish: "mirrored", // 可以停用額外屬性檢查
// };

// let bob = {
//   id: "bsmith",
//   name: "Bob",
//   city: "London",
// };

// shape不同 => 編譯器只會用所有物件共用的屬性
// 型別註記
// let products: Product[] = [hat, gloves, umbrella, shades]; // 只會檢查共有的屬性 或可用選擇性屬性

// products.forEach(
//   (prod) =>
//     console.log(
//       `${prod.name}: ${prod.price} ` +
//         `, waterproof: ${
//           prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false
//         }` // 若有啟用 "strictNullChecks": true 選擇性函式匯禁傳undefined 報錯 => 透過三元算符檢查物件是否有hasFeature方法
//     ) // 物件未定義為undefined
// );

// 物件型別聯集 找出物件型別共有的屬性(不會看屬性的型別)
// let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];
// dataItems.forEach((item) => console.log(`ID: ${item.id}, Name: ${item.name}`));

// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
// dataItems.forEach(
//   (item) =>
//     console.log(`ID: ${item.id}, Name: ${item.name}, Type: ${typeof item}`) // js型別檢查為物件 無法單純用typeof來做防衛敘述
// );
//let dataItems: (Person | Product)[] = [hat, gloves, umbrella, bob];
// // 用in來確認物件內有沒有該屬性 以此來做型別防衛
// dataItems.forEach((item) => {
//   if ("city" in item) {
//     console.log(`Person: ${item.name}, ${item.city}`);
//   } else {
//     console.log(`Product: ${item.name}, ${item.price}`);
//   }
// });

// 型別謂詞函式
// function isPerson(testObj: any): testObj is Person {
//   return testObj.city !== undefined;
// }
// dataItems.forEach((item) => {
//   console.log(isPerson(item));
//   if (isPerson(item)) {
//     console.log(`Person: ${item.name}: ${item.city}`);
//   } else {
//     console.log(`Product: ${item.name}: ${item.price}`);
//   }
// });

//#region  型別交集
// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };
// type Employee = {
//   id: string;
//   company: string;
//   dept: string;
// };
// let bob = {
//   id: "bsmith",
//   name: "bob",
//   city: "London",
//   company: "Acme Co",
//   dept: "Sales",
// };
// let dataItems: (Person & Employee)[] = [bob];

// dataItems.forEach((item) => {
//   console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
//   console.log(`Company: ${item.id}, ${item.company}, ${item.dept}`);
// });
//#endregion

//#region 合併陣列
// type Person = {
//   id: string;
//   name: string;
//   city: string;
// };
// type Employee = {
//   id: string;
//   company: string;
//   dept: string;
// };
// // 型別交集別名
// type EmployeePerson = Person & Employee;
// function correlateData(
//   peopleData: Person[],
//   staff: Employee[]
// ): EmployeePerson[] {
//   let result: EmployeePerson[] = [];
//   peopleData.forEach((p) =>
//     result.push({
//       ...p,
//       // 找同id Employee 資料 找不到給預設
//       ...(staff.find((e) => e.id === p.id) || {
//         company: "None",
//         dept: "None",
//         id: p.id,
//       }),
//     })
//   );
//   return result;
// }

// let people: Person[] = [
//   { id: "bsmith1", name: "Bob Smith1", city: "London1" },
//   { id: "bsmith2", name: "Bob Smith2", city: "London2" },
//   { id: "bsmith3", name: "Bob Smith3", city: "London3" },
// ];
// let employees: Employee[] = [
//   { id: "bsmith1", company: "Acme Co1", dept: "Sales1" },
//   { id: "bsmith2", company: "Acme Co2", dept: "Sales2" },
// ];

// let dataItems: EmployeePerson[] = correlateData(people, employees);

// dataItems.forEach((item) => {
//   console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
//   console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
// });
//#endregion

//#region 型別交集相容性
// 因為以下兩個type的屬性在其型別交集內都找的到 因此可以向下相容
// function writePerson(per: Person): void {
//   console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
// }
// function writeEmployee(per: Employee): void {
//   console.log(`Employee: ${per.id}, ${per.company}, ${per.dept}`);
// }
// dataItems.forEach((item) => {
//   writePerson(item);
//   writeEmployee(item);
// });
//#endregion

// #region 相異型別屬性合併
// type Person = {
//   id: string;
//   name: string;
//   city: string;
//   contact: number;
// };
// type Employee = {
//   id: string;
//   company: string;
//   dept: string;
//   contact: string;
// };
// type EmployeePerson = Person & Employee;
// let typeTest = ({} as EmployeePerson).contact; // nerver
// let person1: EmployeePerson = {
//   id: "bsmith",
//   name: "Bob Smith",
//   city: "London",
//   company: "Acme Co",
//   dept: "Sales",
//   contact: "111", // string不是never

// };
// let person2: EmployeePerson = {
//   id: "bsmith2",
//   name: "Bob Smith2",
//   city: "London2",
//   company: "Acme Co2",
//   dept: "Sales2",
//   contact: 111, // number不是never
// };

type Person = {
  id: string;
  name: string;
  city: string;
  contact: { phone: number };
  getContact(field: string): string;
};
type Employee = {
  id: string;
  company: string;
  dept: string;
  contact: { name: string };
  getContact(field: number): number;
};
type EmployeePerson = Person & Employee;
let typeTest = ({} as EmployeePerson).contact; // { name: string }&{ phone: number }
let typefunTest = ({} as EmployeePerson).getContact; // ((field: string) => string) & ((field: number) => number);

let person1: EmployeePerson = {
  id: "bsmith",
  name: "Bob Smith",
  city: "London",
  company: "Acme Co",
  dept: "Sales",
  contact: { name: "Alice", phone: 12345678 },
  getContact(field: string | number): any {
    return typeof field === "string" ? "Alice" : 321321321;
  },
};
let person2: EmployeePerson = {
  id: "bsmith2",
  name: "Bob Smith2",
  city: "London2",
  company: "Acme Co2",
  dept: "Sales2",
  contact: { name: "Alice", phone: 12345678 },
  getContact(field: string | number): any {
    return typeof field === "string" ? "Alice" : 321321321;
  },
};
let stringtypeTest = person1.getContact("Alice"); // string
let numbertypeTest = person1.getContact(123); // number
//#endregion
