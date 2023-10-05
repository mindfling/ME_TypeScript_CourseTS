"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _title;
    _price;
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }
    set title(productTitle) {
        this.title = productTitle;
    }
    get title() {
        return this._title;
    }
    set price(productPrice) {
        this._price = productPrice;
    }
    get price() {
        return this._price;
    }
}
exports.Product = Product;
