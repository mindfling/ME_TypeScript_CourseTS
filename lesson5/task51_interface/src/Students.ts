// производный класс Студент

import { iUser, Users } from "./Users";

// студент
export interface iStudent extends iUser {
  year: number;
  specialty: string;
}

export class Student implements iUser {
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
    this.id = `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.year = year;
    this.specialty = specialty;
  }
}

export class Students extends Users<iStudent> {
  constructor() {
    super(); // вызываем супер конструктор по умолч
  }

  public override remove(id: string): boolean {
    const index = this.userList.findIndex((user) => user.id === id);
    if (index > -1) {
      this.userList.splice(index, 1); // удаляем этот элемент
      return true;
    }
    return false;
  }
}
