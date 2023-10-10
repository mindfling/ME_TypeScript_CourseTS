"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const Users_1 = require("./Users");
class Students extends Users_1.Users {
    _year;
    _specialty;
    constructor(list, year, specialty) {
        super();
        this.userList = list;
        this._year = year;
        this._specialty = specialty;
    }
    get year() {
        return this._year;
    }
    get specialty() {
        return this._specialty;
    }
}
exports.Students = Students;
