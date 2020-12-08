import { https, logger, Request, Response } from "firebase-functions"
import { PetController } from "./controllers/pet.controller";
import * as db from "firebase-admin";

db.initializeApp();

const petController = new PetController();

export const helloWorld = https.onRequest((request: Request, response: Response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const pet = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    switch(request.method){
      case "POST":
        const newPet = await petController.create(request.body)
        response.json(newPet);
        break;
      case "GET":
      const param = request.params[0]
      console.log(request.params)
      if(param === "/" || !param){
        response.json(await petController.getAll());
      }
      response.json(await petController.getById(param))
      break;
        break;
      default:
        response.json({
          message: "...",
        })
        break;
    }
  }
);
