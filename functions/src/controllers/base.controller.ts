import { IDB } from "../interfaces/db";

export class BaseController<T> {
  constructor(private domain: IDB<T>) {}

  async save(_domain: T): Promise<T | Error> {
    const response = await this.domain.save(_domain);
    return response;
  }

  async getAll(): Promise<T[] | Error> {
    const list = await this.domain.getAll();
    return list;
  }

  async getById(id: string): Promise<T | Error> {
    const response = await this.domain.getById(id);
    return response;
  }
  async update(id: string, data: T): Promise<T | Error> {
    const response = await this.domain.update(id, data);
    return response;
  }
  async delete(id: string): Promise<string | Error> {
    const _id = await this.domain.delete(id);
    return _id;
  }
}
