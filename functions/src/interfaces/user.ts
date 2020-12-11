import { IAddress } from "./address";

export interface IUser {
  name: string;
  dateBirth: Date;
  email?: string;
  imgSrc?: string;
  address?: IAddress;
}
