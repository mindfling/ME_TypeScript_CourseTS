console.log('hello lesson4');

class Student {
  // поля public
  name: string;
  course: string;
  // поля приватные
  _module: number;
  
  // конструктор
  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
    this._module = 1;
  }
  
  // просто геттер getter
  get info(): string {
    return `${this.name} учится на курсе ${this.course}`;
  }
  
  // сеттер
  set module(module: number) {
    this._module = module;
  }
}


// экземпляр класса
const student1: Student = new Student('Дмитри', 'Верстка сайтов');
console.log(student1.info);