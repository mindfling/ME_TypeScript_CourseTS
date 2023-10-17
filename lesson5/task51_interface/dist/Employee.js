"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const utils_1 = require("./utils");
class Employee {
    id;
    firstname;
    surname;
    age;
    post;
    constructor(firstname, surname, age, post) {
        this.id = (0, utils_1.getRandomID)();
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.post = post;
    }
}
exports.Employee = Employee;
