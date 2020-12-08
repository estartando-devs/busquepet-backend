import { FirestoreAdapter } from "../adapters/firestore.adapter"
import { Pet } from "../domain/pet.entity"
import { IPet } from "../interfaces/pet"
import { BaseController } from "./base.controller"

export class PetController extends BaseController<IPet>{
  constructor(dbAdapter = new FirestoreAdapter<IPet>("pets")){
    const pet = new Pet(dbAdapter)
    super(pet)
  }
}
