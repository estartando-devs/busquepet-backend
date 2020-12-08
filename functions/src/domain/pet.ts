import { IDB } from "../interfaces/db";
import { IPet } from "../interfaces/pet";

export class Pet{
  constructor(private db: IDB<IPet>) {}

  save(pet: IPet): Promise<IPet | Error> {
    return this.db.save("pets", pet);
  }

  getAll(): Promise<IPet[] | Error> {
    return this.db.getAll("pets");
  }
  getById(petId: string): Promise<IPet | Error> {
    return this.db.getById("pets", petId);
  }
}
