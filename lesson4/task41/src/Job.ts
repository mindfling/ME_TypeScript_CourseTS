// * класс Job
// у класса есть роль работы, и зарплата за работу
// при создании работы Job(НазваниеРаботы, ЗарплатаЗаРаботу)
export class Job {
  // приватные поля не входят в интерфейс
  private readonly _role: string; // название работы не меняется
  private readonly _salary: number; // зарплата за работу
  
  constructor(jobTitle: string, salary: number) {
    this._role = jobTitle;
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}`);
  }
}
