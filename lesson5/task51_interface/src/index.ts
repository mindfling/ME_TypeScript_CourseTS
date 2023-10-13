// * lesson5 task51

import { Employees } from "./Employees";
import { Student, Students } from "./Students";
import { getRandomInt } from "./utils";


const studentsList: Students = new Students();
// console.log('studentsList: ', studentsList);

// * test add()

studentsList.add(new Student('Dimone', 'Endevie', 25, 2, 'Computer Sci'));
studentsList.add(new Student('Vladis', 'Smidt', 21, 1, 'Sci Fi'));
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
console.log('userList ДО СОРТИРОВКИ');
studentsList.logPerson();

// * test sorted()

console.log();
studentsList.sorted(true)
console.log('userList ПОСЛЕ СОРТИРОВКИ по убыванию');
studentsList.logPerson();

console.log();
studentsList.sorted(false)
console.log('userList ПОСЛЕ СОРТИРОВКИ по возрастанию');
studentsList.logPerson();

// * test remove()
const delindex: number = getRandomInt(0, studentsList.userList.length);
const delid: string = studentsList.userList[delindex].id;

console.log();
console.log('will remove user', delindex, studentsList.get(delid), 'with id =', delid);
studentsList.remove(delid);
studentsList.logPerson();
console.log();
