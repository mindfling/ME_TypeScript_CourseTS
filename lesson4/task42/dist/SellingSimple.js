"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingSimple = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SellingSimple extends AbstractSelling_1.AbstractSelling {
    money = 0;
    getPrice = () => {
        this.money = this.amount * this.product.price;
        return parseFloat(this.money.toFixed(2));
    };
}
exports.SellingSimple = SellingSimple;
