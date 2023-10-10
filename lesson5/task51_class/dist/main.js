"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employees_1 = require("./Employees");
const Students_1 = require("./Students");
const User_1 = require("./User");
const userOne = new User_1.User('Dim', 'Endeve', 21);
const list = new Students_1.Students([], 2, 'Sci Fi course');
console.log('empty list: ', list);
console.log();
const idOne = list.add(userOne);
console.log('one list: ', list.userList);
console.log();
list.add(new User_1.User('Alex', 'Simpson', 22));
list.add(new User_1.User('Enne', 'Willsome', 20));
console.log('three list: ', list.userList);
console.log();
console.log('list before remove: ', list.userList);
console.log();
console.log('remove userOne with id', list.userList[0].id);
list.remove(idOne);
console.log('list after remove: ', list.userList);
console.log();
const workers = new Employees_1.Employees([], 'Developer');
console.log('empty workers: ', workers);
workers.add(userOne);
console.log('One workers: ', workers);
workers.add(new User_1.User('Иван', 'Петров', 27));
console.log('Two workers: ', workers);
console.log();
workers.add(new User_1.User('Марат', 'Aляуддинов', 20));
workers.add(new User_1.User('Екатерина', 'Попова', 24));
workers.add(new User_1.User('Аркадий', 'Паравозов', 55));
workers.add(new User_1.User('Даня', 'Поперечный', 28));
console.log(`All workers before remove`, workers);
console.log();
const rndIndex = Math.floor(Math.random() * (workers.userList.length));
const rndId = workers.userList[rndIndex].id;
console.log('Lets del this worker: ', workers.userList[rndIndex].firstname, workers.userList[rndIndex].surname, ' with id =', rndId);
console.log();
workers.remove(rndId);
console.log('All workers after remove: ', workers);
console.log('It works ;)');
