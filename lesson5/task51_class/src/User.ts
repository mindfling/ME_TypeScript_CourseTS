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
