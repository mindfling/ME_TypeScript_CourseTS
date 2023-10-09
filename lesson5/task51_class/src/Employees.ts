import { User, Users } from "./Users";


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

