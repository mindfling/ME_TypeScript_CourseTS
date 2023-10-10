"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    _id;
    _firstname;
    _surname;
    _age;
    constructor(firstname, surname, age) {
        this._id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;
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
