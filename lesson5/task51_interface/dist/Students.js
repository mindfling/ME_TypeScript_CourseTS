"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const Users_1 = require("./Users");
class Students extends Users_1.Users {
    constructor() {
        super();
    }
    remove(id) {
        const index = this.userList.findIndex((user) => user.id === id);
        if (index > -1) {
            this.userList.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.Students = Students;
