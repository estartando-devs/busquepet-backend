import { FirestoreAdapter } from "../adapters/firestore.adapter"
import { IPet } from "../interfaces/pet"
import { Pet } from "../domain/pet"

export class PetController {
  private dbAdapter = new FirestoreAdapter<IPet>()
  private pet = new Pet(this.dbAdapter)

  async create(_pet: IPet): Promise<IPet | Error> {
    const pet = await this.pet.save(_pet)
    return pet
  }

  async getAll(): Promise<IPet[] | Error > {
    const pet = await this.pet.getAll()
    return pet
  }

  async getById(petId: string): Promise<IPet | Error > {
    const pet = await this.pet.getById(petId)
    return pet
  }
}
