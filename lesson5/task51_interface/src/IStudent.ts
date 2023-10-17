import { IUser } from "./IUser";

// * интерфейс студента
export interface IStudent extends IUser {
  year: number; // год обучения
  specialty: string; // специальность
}
