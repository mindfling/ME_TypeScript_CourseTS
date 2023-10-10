"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("./Users");
class Employees extends Users_1.Users {
    post;
    constructor(post) {
        super();
        this.post = post;
    }
}
