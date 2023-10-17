// производный класс работник
import { IEmployee } from "./IEmployee";
import { getRandomID } from "./utils";


// * класс работник
export class Employee implements IEmployee {
  id: string; //?
  firstname: string; //? нужно ли здесь описывать?
  surname: string; //? нужно ли здесь описывать?
  age: number; //? нужно ли здесь описывать?
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
