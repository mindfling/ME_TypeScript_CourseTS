// * список пользователей

// класс пользователь
export class User {
  protected _id: string; // однозначный условно уникальный идентификатор пользователя
  protected firstname: string; // Имя
  protected surname: string; // Фамилия
  protected age: number; // возраст пользователя

  constructor(
    firstname: string,
    surname: string,
    age: number,
  ) {
    this._id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
  }

  get id(): string {
    return this._id;
  }
}

// абстрактный класс списка пользователей
export abstract class Users {
  public userList: Array<User> = [];

  public add(user: User) {
    this.userList.push(user);
    return this.userList[this.userList.length-1].id;
  }

  // удалить обкт пользователя с данным id
  public remove(id: string): User[] {
    this.userList = this.userList.filter((item: User) => item.id !== id); // update list
    return this.userList;
  }

  public get(id: string): User | null {
    const users: Array<User> = this.userList.filter((item: User) => item.id === id);
    return (users.length > 0) ? users[0] : null;
  }
}


