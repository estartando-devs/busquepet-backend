import { IDB } from "../interfaces/db";
import { IUser } from "../interfaces/user";
import { BaseEntity } from "./base.entity";

export class User extends BaseEntity<IUser>{
  constructor(db: IDB<IUser>) {
    super(db);
  }
}
