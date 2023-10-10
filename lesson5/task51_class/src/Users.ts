import { User } from "./User";

// * список пользователей
// абстрактный класс списка пользователей
export abstract class Users {
  public userList: Array<User> = [];

  public add(user: User) {
    this.userList.push(user);
    return this.userList[this.userList.length - 1].id; // возвращаем id нового пользователя
  }

  // удалить обкт пользователя с данным id
  public remove(id: string): boolean {
    const oldLen: number = this.userList.length;
    const newList: Array<User> = this.userList.filter((item: User) => item.id !== id); // update list
    const newLen = newList.length;
    if (oldLen !== newLen) {
      this.userList = newList; // заменяем мас
      return true;  // е. длина мас изменилась то пользователь удален
    } else {
      return false; // е. длина мас не изменилась то пользователь не удален
    }
  }

  // получаем пользовавтеля по его уникальному id
  public get(id: string): User | null {
    const users: Array<User> = this.userList.filter((item: User) => item.id === id); // список пользователей с id
    return (users.length > 0) ? users[0] : null; // возвращаем елемент
  }
}
