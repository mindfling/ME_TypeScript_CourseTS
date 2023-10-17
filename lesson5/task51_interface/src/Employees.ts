import { IEmployee } from "./IEmployee";
import { Users } from "./Users";


// * класс список сотрудников
export class Employees extends Users<IEmployee> {
  constructor() {
    super();
  }
}
