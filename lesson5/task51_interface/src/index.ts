// * lesson5 task51

import { Employee } from "./Employee";
import { Employees } from "./Employees";
import { Student } from "./Student";
import { Students } from "./Students";
import { getRandomInt } from "./utils";

// * test lists

const studentsList: Students = new Students();
const employeesList: Employees = new Employees();


// * test add()

studentsList.add(new Student('Dimone', 'Endevie', 25, 2, 'Computer Sci'));
studentsList.add(new Student('Vladis', 'Usaraliscas', 21, 1, 'Sci Fi'));
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
studentsList.logPersons();

// * test sorted()

console.log();
studentsList.sorted(true)
console.log('userList ПОСЛЕ СОРТИРОВКИ по убыванию');
studentsList.logPersons();

console.log();
studentsList.sorted(false)
console.log('userList ПОСЛЕ СОРТИРОВКИ по возрастанию');
studentsList.logPersons();

// * test remove()
const delindex: number = getRandomInt(0, studentsList.userList.length - 1);
const delid: string = studentsList.userList[delindex].id;

console.log();
console.log('will remove user', delindex, studentsList.get(delid), 'with id =', delid);
studentsList.remove(delid);
studentsList.logPersons();


// * working with employeesList

employeesList.add(new Employee('Дмитрий',
  'Ендевий',
  33, 'Программист'));
employeesList.add(new Employee('Владимир',
  'Васильев',
  29,
  'Младший разработчик'));
employeesList.add(new Employee('Сергей',
  'Милушкин',
  37,
  'Миддл разработчик'));
employeesList.add(new Employee('Александр',
  'Александров',
  38,
  'Старший разработчик'));

console.log();
employeesList.logPersons()

const indexToDel = 2;
console.log();
console.log('test remove employee before remove');
employeesList.logPersons()

employeesList.remove(employeesList.userList[indexToDel].id)
console.log('after remove');
employeesList.logPersons()