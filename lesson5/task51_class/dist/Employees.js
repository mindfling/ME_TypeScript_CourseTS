"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("./Users");
class Employees extends Users_1.Users {
    _post;
    constructor(position) {
        super();
        this._post = position;
    }
    get post() {
        return this._post;
    }
    set post(position) {
        this._post = position;
    }
}
