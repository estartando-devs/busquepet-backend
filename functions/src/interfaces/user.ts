import { IAdress } from "./adress";

export interface IUser {
  name: string
  dateBirth: Date
  email?: string
  imgSrc?: string
  adress?: IAdress
}
