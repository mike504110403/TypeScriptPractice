"use strict";
console.log("Hello, TypeScript");
function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
// console.log(`Number Value: ${taxNumber.toFixed(2)}`);
// console.log(`String Value: ${taxString.charAt(0)}`)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWpDLFNBQVMsWUFBWSxDQUFDLE1BQWMsRUFBRSxNQUFlO0lBQ2pELE1BQU0sVUFBVSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDaEMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDN0QsQ0FBQztBQUVELElBQUksU0FBUyxHQUFrQixZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hELElBQUksU0FBUyxHQUFrQixZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZELHdEQUF3RDtBQUN4RCxzREFBc0QifQ==