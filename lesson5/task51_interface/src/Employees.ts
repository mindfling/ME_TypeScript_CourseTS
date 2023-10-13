import { iEmployee } from "./IEmployee";
import { Users } from "./Users";


// * класс список сотрудников
export class Employees extends Users<iEmployee> {
  constructor() {
    super();
  }
}
