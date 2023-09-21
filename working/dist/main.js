"use strict";
console.log('hello lesson4');
class Student {
    name;
    course;
    _module;
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this._module = 1;
    }
    get info() {
        return `${this.name} учится на курсе ${this.course}`;
    }
    set module(module) {
        this._module = module;
    }
}
const student1 = new Student('Дмитри', 'Верстка сайтов');
console.log(student1.info);
