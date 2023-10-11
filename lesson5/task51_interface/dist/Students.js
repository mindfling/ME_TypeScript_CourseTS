"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = exports.Student = void 0;
const Users_1 = require("./Users");
class Student {
    id;
    firstname;
    surname;
    age;
    year;
    specialty;
    constructor(firstname, surname, age, year, specialty) {
        this.id = `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.year = year;
        this.specialty = specialty;
    }
}
exports.Student = Student;
class Students extends Users_1.Users {
    constructor() {
        super();
    }
    remove(id) {
        const index = this.userList.findIndex((user) => user.id === id);
        if (index > -1) {
            this.userList.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.Students = Students;
