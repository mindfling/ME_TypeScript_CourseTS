import { User, Users } from "./Users";


// список студентов
export class Students extends Users {
  private year: number | undefined; // номер курса
  private specialty!: string; // сециальность
  
  public override remove(id: string): boolean {
    return false;
  }
  
  public override get(id: string): User | null {
    return null;
  }
}