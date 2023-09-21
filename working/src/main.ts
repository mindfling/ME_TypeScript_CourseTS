console.log('hello lesson4');

// энум особенности
enum StatusStudent {
  enrollee, // абитуриент поступающий
  student,  // поступил и учится
  graduate, // которые сейчас сдает экз
  bachelor, // бакалавр сдал все экзам
}

class Student {
  // поля public
  id: string;
  status: StatusStudent;
  name: string;
  course: string;
  createAt: Date;
  updatedAt?: Date; // ? необязательное поле
  // поля приватные ! or ?
  _module: number;
  
  // конструктор
  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
    this._module = 1;
    this.id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9); // случайный id
    this.status = StatusStudent.enrollee;
    this.createAt = new Date;
  }
  
  // особенности имени сеттера и геттера и их вызова
  // просто геттер getter
  get info(): string {
    return `${this.id} -> ${this.name} учится на курсе "${this.course} на модуле ${this._module}" статус ${this.status} поступил at ${this.createAt}`;
  }
  
  // геттер должен совпадать с переменной и возвращать её тип
  get module(): number {
    return this._module;
  }
  
  // сеттер должен совпадать с именем переменной и возвращать её тип
  set module(module: number) {
    this._module = module;
    this.updatedAt = new Date();
  }
  
  
  changeStatus(status: StatusStudent): void {
    this.status = status;
    this.updatedAt = new Date();
  }
}


// экземпляр класса
const student1: Student = new Student('Дмитри', 'Верстка сайтов');
console.log('student1: ', student1);

console.log(student1.info);

student1.module = 23;
console.log('Модуль изменен на ', student1.module );

console.log('1 student: ', student1);

setTimeout(() => {
  student1.changeStatus(StatusStudent.bachelor);
  console.log('timeout 5s student: ', student1);
}, 5000);

console.log('3 student: ', student1);

