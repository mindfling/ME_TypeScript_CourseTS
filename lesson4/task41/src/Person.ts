// импортируем класс работы Job
import { Job } from "./Job";


// * класс Person сотрудник
export class Person {
  private _job: Job; // работа
  private readonly _name: string; // имя не меняется

  constructor(name: string, job?: Job) {
    this._name = name;
    if (job) {
      this._job = job;
    } else {
      // по умолчанию нет работы -> заглушка Пустой Job и зарплата 0
      this._job = new Job('', 0);
    }
  }

  set job(job: Job) {
    this._job = job;
  }

  get job(): Job {
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

