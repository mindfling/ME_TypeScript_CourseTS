import { Users } from "./Users";
import { iStudent } from "./istudent";


// * класс список студентов
export class Students extends Users<iStudent> {
  constructor() {
    super(); // вызываем супер конструктор по умолч
  }

  public override remove(id: string): boolean {
    const index = this.userList.findIndex((user) => user.id === id);
    if (index > -1) {
      this.userList.splice(index, 1); // удаляем этот элемент
      return true;
    }
    return false;
  }
}
