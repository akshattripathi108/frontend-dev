let product = " wireless headphones PRO ";
product = product.trim().toLowerCase();
let words = product.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        let first = words[i].charAt(0).toUpperCase();
        let rest = words[i].slice(1);
        words[i] = first + rest;
    }
}
let cleaned = words.join(" ");
cleaned = cleaned.replace("Pro", "Pro Edition");
console.log(cleaned);
console.log(cleaned.length);
