// * список пользователей

// класс пользователь
export class User {
  protected id: string; // однозначный условно уникальный идентификатор пользователя
  protected firstname: string; // Имя
  protected surname: string; // Фамилия
  protected age: number; // возраст пользователя

  constructor(
    firstname: string,
    surname: string,
    age: number,
  ) {
    this.id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString()}`;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
  }
}

// абстрактный класс списка пользователей
export abstract class Users {
  public userList: Array<User> = [];

  public add(user: User): void {
    this.userList.push(user);
  }

  public abstract remove(id: string): boolean;

  public abstract get(id: string): User | null;
}


