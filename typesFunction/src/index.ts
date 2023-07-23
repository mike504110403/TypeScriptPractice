function calculateTax(amount: number | string | null): any{
    if (typeof amount == "number")
        return amount*1.2;

    else if (typeof amount == "string")
        return amount;
    return undefined;
}
let taxValue = calculateTax(1);
console.log(`Total Amount: ${taxValue}`);
