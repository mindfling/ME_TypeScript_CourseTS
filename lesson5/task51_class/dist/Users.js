"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
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
