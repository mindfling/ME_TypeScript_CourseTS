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
        const oldLen = this.userList.length;
        const newList = this.userList.filter((item) => item.id !== id);
        const newLen = newList.length;
        if (oldLen !== newLen) {
            this.userList = newList;
            return true;
        }
        else {
            return false;
        }
    }
    get(id) {
        const users = this.userList.filter((item) => item.id === id);
        return (users.length > 0) ? users[0] : null;
    }
}
exports.Users = Users;
