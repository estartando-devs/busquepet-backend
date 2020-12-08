import { https, Request, Response } from "firebase-functions";
import * as db from "firebase-admin";

import { PetRouters } from "./Routers/pet.routers";
import { UserRouters } from "./Routers/user.routers";

db.initializeApp();

const petRouters = new PetRouters();
const userRouters = new UserRouters();

export const user = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await userRouters.execute(request, response)
  }
);

export const pet = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await petRouters.execute(request, response)
  }
);
