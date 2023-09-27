// imports
import { Job } from "./Job";


// уровень зарплаты
enum Salary {
  BASE = 12000,
  MIDDLE = 25000,
  HIGH = 32000,
}

// * Person class
export class Person {
  private _job: Job;
  private _name: string;

  constructor(name: string, prof: string) {
    this._name = name;
    console.log('constructor person name: ', name);
    this._job = new Job(prof, Salary.BASE);
  }

  set job(job: Job) {
    this._job = job;
    console.log('setter the job', job);
  }

  get job(): Job {
    console.log('this is getter of job');
    return this._job;
  }

  getSalary(): number {
    return this._job.salary;
  }

  work(): void {
    this._job.work(this._name);
    // ?? console.log('do some your professional job' + this._job.work);
  }
}



