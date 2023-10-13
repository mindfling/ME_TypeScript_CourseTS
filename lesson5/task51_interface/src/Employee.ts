// производный класс работник

import { iUser } from "./iuser";
import { getRandomID } from "./utils";


// * класс работник
export class Employee implements iUser {
  id: string; //?
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
    this.id = getRandomID();
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.post = post;
  }
}
