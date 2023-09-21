"use strict";
console.log('hello lesson4');
class Student {
    name;
    course;
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    get info() {
        return `${this.name} учится на курсе ${this.course}`;
    }
}
const student1 = new Student('Дмитри', 'Верстка сайтов');
console.log(student1.info);
