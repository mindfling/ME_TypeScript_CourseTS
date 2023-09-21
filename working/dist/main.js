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
        return `${this.name} учится на курсе ${this.course} на модуле ${this._module}`;
    }
    get module() {
        return this._module;
    }
    set module(module) {
        this._module = module;
    }
}
const student1 = new Student('Дмитри', 'Верстка сайтов');
console.log(student1.info);
student1.module = 23;
console.log('Модуль изменен на ', student1.module);
