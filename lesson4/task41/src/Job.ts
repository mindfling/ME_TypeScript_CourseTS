console.log('Привет вы на складе');


export class Job {
  private _role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает в роли ${this._role}`);
  }
}
