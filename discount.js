let totalPurchase = 6200;
let discount = 0;

if (totalPurchase >= 10000) {
    discount = 25;
} else if (totalPurchase >= 5000) {
    discount = 15;
} else if (totalPurchase >= 2000) {
    discount = 5;
}

let finalPrice = totalPurchase - (totalPurchase * (discount / 100));

console.log("Original:", totalPurchase);
console.log("Discount %:", discount);
console.log("Final:", Math.round(finalPrice));
