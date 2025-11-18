class Cart{
    constructor(){
        this.items=[];
    }
    addItem(name,price,qty){
        this.items.push({name:name,price:price,qty:qty});
    }
    getTotal(){
        var sum=0;
        for(var i=0;i<this.items.length;i++){
            sum += this.items[i].price * this.items[i].qty;
        }
        return sum;
    }
    applyCoupon(code){
        if(/^(SAVE|DISC)\d+$/.test(code)){
            var num = Number(code.replace(/\D+/g,'')); 
            var total = this.getTotal();
            return total - (total*num/100);
        }
        return this.getTotal();
    }
}
var cart=new Cart();
cart.addItem("Laptop",50000,1);
cart.addItem("Shoes",2000,2);
console.log(cart.applyCoupon("SAVE20"));
