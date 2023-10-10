import { Students } from "./Students";
import { User } from "./User";

const userOne: User = new User('Dim', 'Endeve', 21); // пользователь

const list: Students = new Students([], 2, 'Sci Fi course'); // список пользователей
console.log('empty list: ', list);
console.log();

const idOne = list.add(userOne)
console.log('one list: ', list.userList);
console.log();

list.add(new User('Alex', 'Simpson', 22));
list.add(new User('Enne', 'Simpson', 20));
console.log('three list: ', list.userList);
console.log();

console.log('list before remove: ', list.userList);
console.log();

console.log('remove userOne with id', list.userList[0].id);
list.remove(idOne);

console.log('list after remove: ', list.userList);
