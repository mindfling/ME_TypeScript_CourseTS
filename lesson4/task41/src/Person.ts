import { Job } from "./Job";


// * Person class
export class Person {
  private _job: Job = new Job('work', 32000);
  private _name: string;

  constructor(name: string);
  constructor(name: string, jobTitle?: string);
  constructor(name: string, jobTitleOrSalary?: string | number) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      this._name = 'Иван';
    }

    if (jobTitleOrSalary) {
      if (typeof jobTitleOrSalary === 'string') {
        this._job = new Job(jobTitleOrSalary, 67000)
      } else {
        this.job = new Job('Программист', jobTitleOrSalary)
      }

    } else {
      this._job = new Job('Программист', 67000)
    }
    
  }

  set job(job: Job) {
    this._job = job;
  }

  get job(): Job {
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



