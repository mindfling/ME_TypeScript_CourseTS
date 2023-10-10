// * список пользователей

// класс пользователь
export class User {
  private _id: string; // однозначный уникальный идентификатор пользователя
  private _firstname: string; // Имя
  private _surname: string; // Фамилия
  private _age: number; // возраст пользователя

  constructor(
    firstname: string,
    surname: string,
    age: number,
  ) {
    this._id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString(16)}`;
    this._firstname = firstname;
    this._surname = surname;
    this._age = age;
  }

  public get id(): string {
    return this._id;
  }

  public get firstname(): string {
    return this._firstname;
  }

  public get surname(): string {
    return this._surname;
  }

  public get age(): number {
    return this._age;
  }
}


// абстрактный класс списка пользователей
export abstract class Users {
  public userList: Array<User> = [];

  public add(user: User) {
    this.userList.push(user);
    return this.userList[this.userList.length - 1].id; // возвращаем id нового пользователя
  }

  // удалить обкт пользователя с данным id
  public remove(id: string): User[] {
    this.userList = this.userList.filter((item: User) => item.id !== id); // update list
    return this.userList; // возвращаем обновленный список
  }

  // получаем пользовавтеля по его уникальному id
  public get(id: string): User | null {
    const users: Array<User> = this.userList.filter((item: User) => item.id === id); // список пользователей с id
    return (users.length > 0) ? users[0] : null; // возвращаем елемент
  }
}
