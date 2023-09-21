"use strict";
console.log('hello lesson4');
var StatusStudent;
(function (StatusStudent) {
    StatusStudent[StatusStudent["enrollee"] = 0] = "enrollee";
    StatusStudent[StatusStudent["student"] = 1] = "student";
    StatusStudent[StatusStudent["graduate"] = 2] = "graduate";
    StatusStudent[StatusStudent["bachelor"] = 3] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Student {
    id;
    status;
    name;
    course;
    createAt;
    updatedAt;
    _module;
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this._module = 1;
        this.id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
        this.status = StatusStudent.enrollee;
        this.createAt = new Date;
    }
    get info() {
        return `${this.id} -> ${this.name} учится на курсе "${this.course} на модуле ${this._module}" статус ${this.status} поступил at ${this.createAt}`;
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
console.log('student: ', student1);
