import { FirestoreAdapter } from "../adapters/firestore.adapter";
import { User } from "../domain/user.entity";
import { IUser } from "../interfaces/user";
import { BaseController } from "./base.controller";

export class UserController extends BaseController<IUser>{
  constructor(dbAdapter = new FirestoreAdapter<IUser>("users")){
    const user = new User(dbAdapter);
    super(user);
  }
}
