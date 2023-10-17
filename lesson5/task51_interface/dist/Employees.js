"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
const Users_1 = require("./Users");
class Employees extends Users_1.Users {
    constructor() {
        super();
    }
    remove(id) {
        const index = this.userList.findIndex((user) => user.id === id);
        this.userList.splice(index, 1);
        return (index > -1);
    }
}
exports.Employees = Employees;
