import { User, Users } from "./Users";


// список студентов
export class Students extends Users {
  private _year: number; // номер курса
  private _specialty: string; // сециальность

  constructor(list: User[], year: number, specialty: string) {
    super();
    this.userList = list;
    this._year = year;
    this._specialty = specialty;
  }
  
  get year(): number {
    return this._year;
  }
  
  get specialty(): string {
    return this._specialty;
  }
}
