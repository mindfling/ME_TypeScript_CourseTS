"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.User = void 0;
class User {
    _id;
    firstname;
    surname;
    age;
    constructor(firstname, surname, age) {
        this._id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
    }
    get id() {
        return this._id;
    }
}
exports.User = User;
class Users {
    userList = [];
    add(user) {
        this.userList.push(user);
        return this.userList[this.userList.length - 1].id;
    }
    remove(id) {
        this.userList = this.userList.filter((item) => item.id !== id);
        return this.userList;
    }
    get(id) {
        const users = this.userList.filter((item) => item.id === id);
        return (users.length > 0) ? users[0] : null;
    }
}
exports.Users = Users;
