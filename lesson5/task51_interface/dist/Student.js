"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const utils_1 = require("./utils");
class Student {
    _id;
    firstname;
    surname;
    age;
    year;
    specialty;
    constructor(firstname, surname, age, year, specialty) {
        this._id = (0, utils_1.getRandomID)();
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.year = year;
        this.specialty = specialty;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.Student = Student;
