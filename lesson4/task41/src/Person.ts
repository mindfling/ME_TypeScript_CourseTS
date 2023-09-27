// импортируем класс работы Job
import { Job } from "./Job";


// * класс Person
export class Person {
  private _job: Job;
  private _name: string;

  constructor(name: string);
  constructor(name: string, job: Job);
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

