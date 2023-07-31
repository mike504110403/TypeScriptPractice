declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare type comboType = 1 | 2 | 3 | City.London;
declare type comboTupleType = [string, number | boolean, comboType];
declare let result: comboTupleType[];
