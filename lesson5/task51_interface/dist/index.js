"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employees_1 = require("./Employees");
const Students_1 = require("./Students");
const studentsList = new Students_1.Students();
console.log('studentsList: ', studentsList);
studentsList.add({
    id: 'id1234',
    firstname: 'Dimone',
    surname: 'Endevie',
    age: 32,
    year: 1,
    specialty: 'Com Sci',
});
studentsList.add({
    id: 'id7685',
    firstname: 'Vlad',
    surname: 'Smidt',
    age: 31,
    year: 2,
    specialty: 'Com Sci',
});
console.log('userList ', studentsList.userList);
studentsList.add(new Students_1.Student('Дмитрий', 'Ендевий', 33, 3, 'Компьютерные науки'));
studentsList.add(new Students_1.Student('Владимир', 'Васильев', 29, 1, 'Компьютерные науки'));
studentsList.add(new Students_1.Student('Владимир', 'Васильев', 31, 1, 'Физикеские технологии'));
console.log('userList ', studentsList.userList);
const e = new Employees_1.Employees();
