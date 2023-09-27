"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _amount;
    money;
    constructor(sellingProduct, sellingAmount) {
        this._product = sellingProduct;
        this._amount = +sellingAmount;
    }
    compare(otherProduct) {
        if (this._product.price > otherProduct.price) {
            console.log(this._product.title, 'дороже чем', otherProduct.title);
            return true;
        }
        return false;
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
    getPrice() {
        console.log('Product:\nназвание: ', this._product.title, '\nпо цене: ', this._product.price);
        return (this._amount * this._product.price).toFixed(2);
    }
}
exports.AbstractSelling = AbstractSelling;
