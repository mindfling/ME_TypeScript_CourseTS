"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
const Users_1 = require("./Users");
class Employees extends Users_1.Users {
    _post;
    constructor(list, position) {
        super();
        this.userList = list;
        this._post = position;
    }
    get post() {
        return this._post;
    }
    set post(position) {
        this._post = position;
    }
}
exports.Employees = Employees;
