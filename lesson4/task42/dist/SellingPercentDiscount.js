"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingPercentDiscount = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SellingPercentDiscount extends AbstractSelling_1.AbstractSelling {
    money = 0;
    _minimalAmount;
    constructor(product, amount, minimalAmount) {
        super(product, amount);
        this.product = product;
        this.amount = amount;
        this._minimalAmount = minimalAmount;
    }
    getPrice = () => {
        if (this.amount >= this._minimalAmount) {
            this.money = this.amount * this.product.price * 0.9;
        }
        else {
            this.money = this.amount * this.product.price;
        }
        return parseFloat(this.money.toFixed(2));
    };
}
exports.SellingPercentDiscount = SellingPercentDiscount;
