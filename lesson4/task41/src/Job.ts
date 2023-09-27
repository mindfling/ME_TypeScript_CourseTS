// * класс Job
// у класса есть роль работы, и зарплата за работу
// при создании работы Job(НазваниеРаботы, ЗарплатаЗаРаботу)


// * интерфейс для Job
// содержит общие публичные поля и методы
interface iJobPosition {
  salary: number;
  work: (personName: string) => void;
}

// * класс
export class Job implements iJobPosition {
  // приватные поля не входят в интерфейс
  private _role: string;
  private _salary: number;
  
  // * конструктор класса
  constructor(jobTitle: string);
  constructor(jobTitle: string, salary: number);
  constructor(jobTitle: string, salary?: number) {
    this._role = jobTitle;
    this._salary = (salary) ? salary : 0;
  }

  get salary(): number {
    return this._salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает в роли ${this._role}`);
  }
}
