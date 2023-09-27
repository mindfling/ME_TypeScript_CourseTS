// импортируем класс работы Job
import { Job } from "./Job";


// ??? интерфейс ? удалить
export interface iPerson {
  job: Job | undefined;
  getSalary: () => number;
  work: () => void;
}

// * класс Person
export class Person implements iPerson {
  private _job: Job;
  private _name: string;

  // ??? перезагрузка конструкторов
  constructor(name: string);
  constructor(name: string, job: Job);
  // ? реализация
  constructor(name: string, job?: Job) {
    this._name = name;
    if (job) {
      this._job = job;
    } else {
      this._job = new Job('');
    }
  }

  set job(job: Job) {
    this._job = job;
  }

  get job(): Job | undefined{
    return this._job;
  }

  // расчет зарплаты сотрудника
  public getSalary(): number {
    return this._job.salary;
  }

  // просим сотрудника работать
  public work(): void {
    this._job.work(this._name);
  }
}

