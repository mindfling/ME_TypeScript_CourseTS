import { IUser } from "./IUser";

// * интерфейс работник
export interface IEmployee extends IUser {
  post: string; // должность
}
