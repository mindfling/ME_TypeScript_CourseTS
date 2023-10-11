"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = exports.Employee = void 0;
const Users_1 = require("./Users");
class Employee {
    id;
    firstname;
    surname;
    age;
    post;
    constructor(firstname, surname, age, post) {
        this.id = `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(1, 11)}`;
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.post = post;
    }
}
exports.Employee = Employee;
class Employees extends Users_1.Users {
    constructor() {
        console.log('EMPLOY CONSTRUCTOR');
        super();
    }
}
exports.Employees = Employees;
const e = new Employees();
console.log('EMPLOYEES', e.userList);
