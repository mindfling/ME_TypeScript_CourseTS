console.log('hello lesson4');

class Student {
  // поля
  name: string;
  course: string;
  
  // конструктор
  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
  }
  
  // просто геттер getter
  get info(): string {
    return `${this.name} учится на курсе ${this.course}`;
  }
}


// экземпляр класса
const student1: Student = new Student('Дмитри', 'Верстка сайтов');
console.log(student1.info);