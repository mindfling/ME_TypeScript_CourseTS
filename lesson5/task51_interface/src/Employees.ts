import { IEmployee } from "./IEmployee";
import { Users } from "./Users";


// * класс список сотрудников
export class Employees extends Users<IEmployee> {
  constructor() {
    super();
  }

  /**
   * try to override
   * @method remove()
   * @id id of user in list
   */
  public override remove(id: string): boolean {
    const index = this.userList.findIndex((user: IEmployee) => user.id === id);
    this.userList.splice(index, 1);
    return (index > -1);
  }
}
