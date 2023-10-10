import { Students } from "./Students";
import { User } from "./Users";

const userOne: User = new User('Dim', 'Endeve', 21);
console.log('userOne: ', userOne);


const list: Students = new Students([], 2, 'Sci Fi');
console.log('list: ', list);

const idOne = list.add(userOne)
console.log('idOne: ', idOne);
console.log('list: ', list);

list.add(new User('Alex', 'Simpson', 22));
list.add(new User('Enne', 'Simpson', 20));
console.log('list: ', list);
console.log();
console.log(list.year, list.specialty, list.userList[0], list.userList[0].id);

console.log(list.remove(idOne));
console.log('list: ', list);
