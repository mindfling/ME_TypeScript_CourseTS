console.log('hello lesson4');

class Student {
  // поля public
  name: string;
  course: string;
  // поля приватные ! or ?
  _module: number;
  
  // конструктор
  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
    this._module = 1;
  }
  
  // особенности имени сеттера и геттера и их вызова
  // просто геттер getter
  get info(): string {
    return `${this.name} учится на курсе ${this.course} на модуле ${this._module}`;
  }
  
  // геттер должен совпадать с переменной и возвращать её тип
  get module(): number {
    return this._module;
  }
  
  // сеттер должен совпадать с именем переменной и возвращать её тип
  set module(module: number) {
    this._module = module;
  }
}


// экземпляр класса
const student1: Student = new Student('Дмитри', 'Верстка сайтов');
console.log(student1.info);

student1.module = 23;
console.log('Модуль изменен на ', student1.module );

