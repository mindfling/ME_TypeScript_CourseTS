"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const Users_1 = require("./Users");
class Students extends Users_1.Users {
    year;
    specialty;
    remove(id) {
        return false;
    }
    get(id) {
        return null;
    }
}
exports.Students = Students;
