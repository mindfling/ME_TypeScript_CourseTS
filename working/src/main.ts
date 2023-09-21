console.log('hello lesson4');

class Student {
  name: string;
  course: string;
  
  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
  }
}


// экземпляр класса
const student1: Student = new Student('Дмитри', 'Верстка сайтов');