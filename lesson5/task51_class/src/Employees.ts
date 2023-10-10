import { User } from "./User";
import { Users } from "./Users";


// список сотрудников
class Employees extends Users {
  private _post: string; // должность сотрудников

  constructor(list: User[], position: string) {
    super();
    this.userList = list;
    this._post = position; // должность
  }

  public get post(): string {
    return this._post;
  }

  public set post(position: string) {
    this._post = position;
  }
}
