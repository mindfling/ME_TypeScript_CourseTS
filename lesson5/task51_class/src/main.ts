import { Employees } from "./Employees";
import { Students } from "./Students";
import { User } from "./User";

const userOne: User = new User('Dim', 'Endeve', 21); // пользователь

// * test Students
const list: Students = new Students([], 2, 'Sci Fi course'); // список пользователей
console.log('empty list: ', list);
console.log();

const idOne = list.add(userOne)
console.log('one list: ', list.userList);
console.log();

list.add(new User('Alex', 'Simpson', 22));
list.add(new User('Enne', 'Willsome', 20));
console.log('three list: ', list.userList);
console.log();

console.log('list before remove: ', list.userList);
console.log();

console.log('remove userOne with id', list.userList[0].id);
list.remove(idOne);

console.log('list after remove: ', list.userList);

console.log();


// * test Employees
const workers: Employees = new Employees([], 'Developer');
console.log('empty workers: ', workers);

workers.add(userOne);
console.log('One workers: ', workers);

workers.add(new User('Иван', 'Петров', 27));
console.log('Two workers: ', workers);
console.log();


workers.add(new User('Марат', 'Aляуддинов', 20));
workers.add(new User('Екатерина', 'Попова', 24));
workers.add(new User('Аркадий', 'Паравозов', 55));
workers.add(new User('Даня', 'Поперечный', 28));
console.log(`All workers before remove`, workers);

console.log();
const rndIndex = Math.floor(Math.random() * (workers.userList.length));
const rndId = workers.userList[rndIndex].id;
console.log('Lets del this worker: ', workers.userList[rndIndex].firstname, workers.userList[rndIndex].surname, ' with id =',  rndId);
console.log();

workers.remove(rndId);
console.log('All workers after remove: ', workers);

console.log('It works ;)');

