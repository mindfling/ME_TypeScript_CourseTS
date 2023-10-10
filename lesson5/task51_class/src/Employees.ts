import { User, Users } from "./Users";


// список сотрудников
class Employees extends Users {
  private post: string; // должность сотрудников

  constructor(post: string) {
    super();
    this.post = post;
    
  }
  
}

