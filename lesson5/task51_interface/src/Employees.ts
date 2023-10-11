// производный класс Студент

import { iUser, Users } from "./Users";

// работник
export interface iEmployee extends iUser {
  post: string;
}


export class Employee implements iUser {
  id: string;
  firstname: string;
  surname: string;
  age: number;
  post: string;
  
  
  constructor(
    firstname: string,
    surname: string,
    age: number,
    post: string,
  ) {
    this.id = `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(1, 11)}`;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.post = post;
  }
}

export class Employees extends Users<iEmployee> {
  constructor() {
    console.log('EMPLOY CONSTRUCTOR');
    super();
  }
}


const e: Employees = new Employees()

console.log('EMPLOYEES', e.userList)