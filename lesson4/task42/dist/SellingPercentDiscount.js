"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPercentDiscount = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SellingPercentDiscount extends AbstractSelling_1.AbstractSelling {
    minimalAmount;
    constructor(product, amount, minimalAmount) {
        super(product, amount);
        this.product = product;
        this.amount = amount;
        this.minimalAmount = minimalAmount;
    }
    getPrice = () => {
        if (this.amount >= this.minimalAmount) {
            return (this.amount * this.product.price * 0.9).toFixed(2);
        }
        else {
            return (this.amount * this.product.price).toFixed(2);
        }
    };
}
exports.SellingPercentDiscount = SellingPercentDiscount;
