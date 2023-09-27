// * index
import { Job } from "./Job";
import { Person } from "./Person";

export enum Payment {
  BASE = 0,
  BEGINER = 12000,
  MIDDLE = 27000,
  HIGH = 32000,
  UPPER = 64000,
}

// * работа на складе
// обекты работ
const pusher = new Job('Тянутель', Payment.BEGINER);
console.log('pusher: ', pusher);

const puller = new Job('Толкатель', Payment.MIDDLE);
console.log('puller: ', puller);

const volunteer = new Job('Доброволец');
console.log('volunteer: ', volunteer);


// обьекты сотрудников
const personOne = new Person('Кирилл', pusher);
console.log('personOne: ', personOne);

const personTwo = new Person('Сергей', puller);
console.log('personTwo: ', personTwo);

const personThree = new Person('Александр', puller);
console.log('personThree: ', personThree);

const personFree = new Person('Безработный');
console.log('personFree: ', personFree);