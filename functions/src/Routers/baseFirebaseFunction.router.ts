import { Request, Response } from "firebase-functions";
import { IDB } from "../interfaces/db";

export class BaseFirebaseFunctionRouter<T> {
  constructor (private controller: IDB<T>) {}

  async execute (request: Request, response: Response){
    let obj = {};
    const { body, params } = request;
    const id = params[0];

    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
    response.set("Access-Control-Allow-Headers", "*");

    switch (request.method) {
      case "DELETE":
        obj = await this.controller.delete(id);
        response.json(obj);
        break;
      case "PUT":
        obj = await this.controller.update(id, body);
        response.json(obj);
        break;
      case "POST":
        obj = await this.controller.save(body);
        response.json(obj);
        break;
      case "GET":
        if (id === "/" || !id) {
          response.json(await this.controller.getAll());
          break;
        }
        response.json(await this.controller.getById(id));
        break;
      default:
        response.json({
          message: "...",
        });
        break;
    }
  }
}
