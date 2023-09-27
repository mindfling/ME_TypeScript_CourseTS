"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _amount;
    constructor(sellingProduct, sellingAmount) {
        this._product = sellingProduct;
        this._amount = +sellingAmount;
    }
    compare(otherProduct) {
        if (this._product.price < otherProduct.price) {
            return 1;
        }
        if (this._product.price > otherProduct.price) {
            return -1;
        }
        return 0;
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
}
exports.AbstractSelling = AbstractSelling;
