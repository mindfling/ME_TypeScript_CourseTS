"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _amount;
    constructor(sellingProduct, sellingAmount) {
        this._product = sellingProduct;
        this._amount = sellingAmount;
    }
    set product(product) {
        this._product = product;
    }
    get product() {
        return this._product;
    }
    set amount(amount) {
        this._amount = amount;
    }
    get amount() {
        return this._amount;
    }
    static compare = (first, second) => {
        return (second.getPrice() - first.getPrice());
    };
}
exports.AbstractSelling = AbstractSelling;
