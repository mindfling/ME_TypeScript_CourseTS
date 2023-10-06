// * lesson5 task51
interface User {
  id: string;
  firstname: string;
  surname: string;
  age: number;
}


// вместо T любой его потомок
abstract class Users<T extends User> {
  private _userList: T[] = []; // empty array

  public get userList(): T[] {
    return this._userList;
  }


  add(user: T) { // add elem to array
    this._userList.push(user);
  }

  remove(id: keyof T): boolean {
    return true;
  }

  get(id: keyof T): T | null {
    const user: T = this._userList[0];
    return user;
  }
}


interface iStudent extends User {
  year: number;
  specialty: string;
}

class Student implements iStudent {
  id: string;
  firstname: string;
  surname: string;
  age: number;
  year: number;
  specialty: string;
  constructor(
    firstname: string,
    surname: string,
    age: number,
    year: number,
    specialty: string,
  ) {
    this.id = `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3)}`;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.year = year;
    this.specialty = specialty;
  }
}

interface iEmployee extends User {
  post: string;
}



class Students extends Users<iStudent> {

  constructor() {
    super(); // вызываем супер конструктор по умолч
  }
}

class Employees extends Users<iEmployee> {

  constructor() {
    super();
  }
}



const studentsList: Students = new Students();
console.log('studentsList: ', studentsList);

// studentsList.add({
//   id: 'id1234',
//   firstname: 'Dimone',
//   surname: 'Endevie',
//   age: 32,
//   year: 1,
//   specialty: 'Com Sci',
// });
console.log('get userList ', studentsList.userList);

studentsList.add(new Student('Дмитрий', 'Ендевий', 33, 2, 'Комп науки'));
console.log('get userList ', studentsList.userList);


