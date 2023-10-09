// * список пользователей

// класс пользователь
class User {
  protected id: string; // однозначный условно уникальный идентификатор пользователя
  protected firstname: string; // Имя
  protected surname: string; // Фамилия
  protected age: number; // возраст пользователя

  constructor(
    firstname: string,
    surname: string,
    age: number,
  ) {
    this.id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString()}`;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
  }
}


// абстрактный класс списка пользователей
abstract class Users {
  public userList: Array<User> = [];

  public add(user: User): void {
    this.userList.push(user);
  }

  public abstract remove(id: string): boolean;

  public abstract get(id: string): User | null;
}


// список студентов
class Students extends Users {
  private year: number | undefined; // номер курса
  private specialty!: string; // сециальность
  
  public override remove(id: string): boolean {
    return !!0;
  }
  
  public override get(id: string): User | null {
    return null;
  }
}


// список сотрудников
class Employees extends Users {
  private post: string; // должность сотрудников

  constructor(post: string) {
    super();
    this.post = post;
  }
  
  public override remove(id: string): boolean {
    return false;
  }
  
  public override get(id: string): User | null {
    return null;
  }
}

