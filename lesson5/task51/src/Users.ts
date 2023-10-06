// * список пользователей

class User {
  private id: string;
  private firstname: string;
  private surname: string;
  private age: number;

  constructor(
    firstname: string,
    surname: string,
    age: number,
  ) {
    this.id = Math.random().toString(32).substring(2, 10) +
      + '_' + Date.now().toString().substring(2, 10);
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
  }
}

abstract class Users {
  public userList: Array<User> = [];

  public add(user: User): void {
    this.userList.push(user);
  }

  public remove(id: string): boolean;

  public get(id: string): User | null;
}


// список студентов
class Students extends Users {
  private year: number; // номер курса
  private specialty: string; // сециальность
}


// список сотрудников
class Employees extends Users {
  private post: string; // должность сотрудников

  constructor(post: string) {
    super();
    this.post = post;

  }
}