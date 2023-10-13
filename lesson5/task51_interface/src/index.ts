// * lesson5 task51

import { Employees } from "./Employees";
import { Student, Students } from "./Students";


const studentsList: Students = new Students();
// console.log('studentsList: ', studentsList);

studentsList.add(new Student('Dimone', 'Endevie', 25, 2, 'Computer Sci'));
studentsList.add(new Student('Vlad', 'Smidt', 21, 1, 'Sci Fi'));
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
  37, 5,
  'Физикеские технологии'));
studentsList.add(new Student('Александр',
  'Александров',
  31, 1,
  'Физикеские технологии'));

console.log();
console.log('userList ДО СОРТИРОВКИ', studentsList.userList);

console.log();
studentsList.sorted(true)
console.log('userList ПОСЛЕ СОРТИРОВКИ по убыванию', studentsList.userList);

console.log();
studentsList.sorted(false)
console.log('userList ПОСЛЕ СОРТИРОВКИ по возрастанию', studentsList.userList);


// console.log('userList ', studentsList.userList, 'len =', studentsList.userList.length);
// const del: string = 'id7685' // тестируем удаление пользователя с заданым id
// console.log('delete', del);

// console.log(studentsList.remove(del))
// console.log('after del', studentsList.userList, 'len =', studentsList.userList.length);

