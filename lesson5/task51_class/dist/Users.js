"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.User = void 0;
class User {
    id;
    firstname;
    surname;
    age;
    constructor(firstname, surname, age) {
        this.id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString()}`;
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
    }
}
exports.User = User;
class Users {
    userList = [];
    add(user) {
        this.userList.push(user);
    }
}
exports.Users = Users;
