import { IDB } from "../interfaces/db";
import { IPet } from "../interfaces/pet";

export class PetDomain{
  constructor(private db: IDB<IPet>) {}

  save(pet: IPet): Promise<IPet> {
    return this.db.save("pets", pet);
  }

  getById(petId: string): Promise<IPet | Error> {
    return this.db.getById("pets", petId);
  }
}
