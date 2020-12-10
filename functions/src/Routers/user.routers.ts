import { BaseFirebaseFunctionRouter } from "./baseFirebaseFunction.router";
import { UserController } from "../controllers/user.controller";
import { IUser } from "../interfaces/user";

export class UserRouters extends BaseFirebaseFunctionRouter<IUser> {
  constructor(userController = new UserController()) {
    super(userController);
  }
}
