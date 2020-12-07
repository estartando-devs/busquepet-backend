import { FirestoreAdapter } from "../adapters/firestore.adapter"
import { IPet } from "../interfaces/pet"
import { PetDomain } from "../domain/pet.domain"

export class PetController {
  private dbAdapter = new FirestoreAdapter<IPet>()
  private petDomain = new PetDomain(this.dbAdapter)

  constructor() {
    this.create = this.create.bind(this)
    this.getById = this.getById.bind(this)
  }

  async create(_pet: IPet): Promise<IPet> {
    const pet = await this.petDomain.save(_pet)
    return pet
  }

  async getById(petId: string): Promise<IPet | Error > {
    const pet = await this.petDomain.getById(petId)
    return pet
  }
}
