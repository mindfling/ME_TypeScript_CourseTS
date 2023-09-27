"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _title;
    _price;
    constructor(productTitle, productPrice) {
        this._title = productTitle;
        this._price = productPrice;
    }
    set title(productTitle) {
        this.title = productTitle + '';
    }
    get title() {
        return this._title;
    }
    set price(productPrice) {
        this._price = +productPrice;
    }
    get price() {
        return this._price;
    }
}
exports.Product = Product;
