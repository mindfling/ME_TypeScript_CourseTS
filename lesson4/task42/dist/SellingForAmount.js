"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingForAmount = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
const Product_1 = require("./Product");
class SellingForAmount extends AbstractSelling_1.AbstractSelling {
    discountQuantaty;
    constructor(sellingProduct, sellingAmount, discountQuantaty) {
        super(sellingProduct, sellingAmount);
        this.product = sellingProduct;
        this.amount = sellingAmount;
        this.discountQuantaty = discountQuantaty;
    }
    getPrice = () => {
        if (this.amount < this.discountQuantaty) {
            return (this.amount * this.product.price).toFixed(2);
        }
        else {
            return (this.amount * this.product.price * 0.9).toFixed(2);
        }
    };
}
exports.SellingForAmount = SellingForAmount;
const prod = new Product_1.Product('Мой продукт', 124);
console.log('prod: цена', prod.price, " название", prod.title);
const sell = new SellingForAmount(prod, 10, 5);
console.log('sell: ', sell);
