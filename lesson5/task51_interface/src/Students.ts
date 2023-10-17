import { IStudent } from "./IStudent";
import { Users } from "./Users";


// * класс список студентов
export class Students extends Users<IStudent> {
  constructor() {
    super(); // вызываем супер конструктор по умолч
  }

  // test for override
  public override remove(id: string): boolean {
    const index = this.userList.findIndex((user) => user.id === id);
    if (index > -1) {
      this.userList.splice(index, 1); // удаляем этот элемент
      return true;
    }
    return false;
  }
}
