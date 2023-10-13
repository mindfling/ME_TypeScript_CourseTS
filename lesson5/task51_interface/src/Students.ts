// производный класс Студент

import { Users } from "./Users";
import { iStudent } from "./istudent";
import { getRandomID } from "./utils";

// * класс студент
export class Student implements iStudent {
  private _id: string;

  firstname: string;
  surname: string;
  age: number;
  year: number;
  specialty: string;
  
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  
  constructor(
    firstname: string,
    surname: string,
    age: number,
    year: number,
    specialty: string,
  ) {
    this._id = getRandomID();
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
