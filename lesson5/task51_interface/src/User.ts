export interface User {
  id: string;
  firstname: string;
  surname: string;
  age: number;
}


// вместо T любой его потомок
export abstract class Users<T extends User> {
  private _userList: Array<T> = []; // empty array

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
    this._userList = this._userList.filter((item: T) => item.id !== id);
    const newLen: number = this._userList.length;
    return oldLen !== newLen;
  }

  public get(id: string): T | null {
    // const user: T = this._userList[0];
    const users: Array<T> = this._userList.filter((user: T) => user.id === id);
    return users.length > 0 ? users[0] : null;
  }
}



interface iEmployee extends User {
  post: string;
}

class Employees extends Users<iEmployee> {
  constructor() {
    super();
  }
}
