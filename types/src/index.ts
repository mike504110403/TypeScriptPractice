console.log("Hello, TypeScript");

function calculateTax(amount: number, format: boolean): string|number{
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber: string|number = calculateTax(100, false);
let taxString: string|number = calculateTax(100, true);
// console.log(`Number Value: ${taxNumber.toFixed(2)}`);
// console.log(`String Value: ${taxString.charAt(0)}`)