import { IDB } from "../interfaces/db";
import { IPet } from "../interfaces/pet";
import { BaseEntity } from "./base.entity";

export class Pet extends BaseEntity<IPet>{
  constructor(db: IDB<IPet>) {
    super(db)
  }
}
