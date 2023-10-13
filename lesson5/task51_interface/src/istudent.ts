import { iUser } from "./iuser";

// интерфейс студента
export interface iStudent extends iUser {
  year: number;
  specialty: string;
}
