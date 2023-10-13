"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const utils_1 = require("./utils");
class User {
    _id;
    _firstname;
    _surname;
    _age;
    constructor(firstname, surname, age) {
        this._id = (0, utils_1.getRandomID)();
        this._firstname = firstname;
        this._surname = surname;
        this._age = age;
    }
    get id() {
        return this._id;
    }
    get firstname() {
        return this._firstname;
    }
    get surname() {
        return this._surname;
    }
    get age() {
        return this._age;
    }
}
exports.User = User;
