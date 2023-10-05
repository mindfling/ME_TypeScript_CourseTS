"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingTenDiscount = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SellingTenDiscount extends AbstractSelling_1.AbstractSelling {
    money = 0;
    getPrice = () => {
        this.money = this.amount * this.product.price;
        if (this.money > 10) {
            return (this.money - 10).toFixed(2);
        }
        else {
            return (this.money).toFixed(2);
        }
    };
}
exports.SellingTenDiscount = SellingTenDiscount;
