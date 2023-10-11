"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    _userList = [];
    get userList() {
        return this._userList;
    }
    add(user) {
        this._userList.push(user);
        return this.userList[this.userList.length - 1].id;
    }
    remove(id) {
        const oldLen = this._userList.length;
        this._userList = this._userList.filter((item) => item.id !== id);
        const newLen = this._userList.length;
        return oldLen !== newLen;
    }
    get(id) {
        const users = this._userList.filter((user) => user.id === id);
        return users.length > 0 ? users[0] : null;
    }
}
exports.Users = Users;
