import { BaseFirebaseFunctionRouter } from "./baseFirebaseFunction.router";
import { PetController } from "../controllers/pet.controller";
import { IPet } from "../interfaces/pet";

export class PetRouters extends BaseFirebaseFunctionRouter<IPet> {
  constructor(petController = new PetController()) {
    super(petController)
  }
}
