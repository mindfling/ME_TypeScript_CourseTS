// производный класс Студент

import { IStudent } from "./IStudent";
import { getRandomID } from "./utils";

// * класс студент
export class Student implements IStudent {
  private _id: string;
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
    this._id = getRandomID();
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.year = year;
    this.specialty = specialty;
  }
  
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}
