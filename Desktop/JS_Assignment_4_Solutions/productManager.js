class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }
    details() {
        return this.id + " - " + this.name + " : " + this.price + " (" + this.category + ")";
    }
}
var products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Accessories"),
    new Product(3, "Phone", 15000, "Electronics")
];
var filtered = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].price > 1000) {
        filtered.push(products[i].details());
    }
}
console.log(filtered);
