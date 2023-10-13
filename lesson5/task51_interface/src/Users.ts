import { iUser } from "./iuser";


// * общий список пользователей
export abstract class Users<T extends iUser> {
  private _userList: Array<T> //

  constructor() {
    this._userList = [];
  }

  public get userList(): T[] {
    return this._userList;
  }

  //
  public add(user: T) {
    this._userList.push(user);
    return this.userList[this.userList.length - 1].id; // возвращаем id нового пользователя
  }

  //
  public remove(id: string): boolean {
    const oldLen: number = this._userList.length;
    this._userList = this._userList.filter((item: T) => 
        item.id !== id);
    const newLen: number = this._userList.length;
    return oldLen !== newLen;
  }

  //
  public get(id: string): T | null {
    const users: Array<T> = this._userList.filter((user: T) => 
        user.id === id);
    return users.length > 0 ? users[0] : null;
  }

  /**
   * sorted() по умолчанию сортируем пользователей по возрасту
   * @param descending 
   * false -> по возрастанию 1,2,3..
   * true -> поубыванию возраста,
   */
  public sorted(descending: boolean | undefined): Array<T> {
    this._userList = this._userList.sort((a: T, b: T) =>
      !!descending ? (b.age - a.age) : (a.age - b.age));
    return this._userList;
  }

  /**
   * logPerson() функция логирования
   */
  public logPerson() {
    this._userList.forEach((item: T, i: number) => {
      console.log(`${i}  - ${item.age} лет\t - ${item.firstname}\t ${item.surname},\t ${item.id}`);
    });
  }
}
