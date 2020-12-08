import { https, Request, Response } from "firebase-functions";
import * as db from "firebase-admin";

import { PetController } from "./controllers/pet.controller";
import { UserController } from "./controllers/user.controller";

db.initializeApp();

const petController = new PetController();
const userController = new UserController();

export const user = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    let obj = {};
    const { body, params } = request;
    const id = params[0];

    switch (request.method) {
      case "DELETE":
        obj = await userController.delete(id);
        response.json(obj);
        break;
      case "PUT":
        obj = await userController.update(id, body);
        response.json(obj);
        break;
      case "POST":
        obj = await userController.create(body);
        response.json(obj);
        break;
      case "GET":
        if (id === "/" || !id) {
          response.json(await userController.getAll());
          break;
        }
        response.json(await userController.getById(id));
        break;
      default:
        response.json({
          message: "...",
        });
        break;
    }
  }
);

export const pet = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    let obj = {};
    const { body, params } = request;
    const id = params[0];

    switch (request.method) {
      case "DELETE":
        obj = await petController.delete(id);
        response.json(obj);
        break;
      case "PUT":
        obj = await userController.update(id, body);
        response.json(obj);
        break;
      case "POST":
        obj = await petController.create(body);
        response.json(obj);
        break;
      case "GET":
        if (id === "/" || !id) {
          response.json(await petController.getAll());
          break;
        }
        response.json(await petController.getById(id));
        break;
      default:
        response.json({
          message: "...",
        });
        break;
    }
  }
);
