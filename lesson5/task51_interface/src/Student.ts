import { User, Users } from "./User";


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

class Students extends Users<iStudent> {
  constructor() {
    super(); // вызываем супер конструктор по умолч
  }
}
