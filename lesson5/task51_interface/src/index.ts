// * lesson5 task51

import { Employees } from "./Employees";
import { Student, Students } from "./Students";


const studentsList: Students = new Students();
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

studentsList.add(new Student('Дмитрий',
    'Ендевий',
    33, 3,
    'Компьютерные науки'));
studentsList.add(new Student('Владимир',
    'Васильев',
    29, 1,
    'Компьютерные науки'));
studentsList.add(new Student('Владимир',
    'Васильев',
    31, 1,
    'Физикеские технологии'));

console.log('userList ', studentsList.userList);

const e: Employees = new Employees()