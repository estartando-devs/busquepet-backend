import { IDB } from "../interfaces/db";
import * as dataBase from "firebase-admin";

const basePath = "/root_collection/document";

export class FirestoreAdapter<T> implements IDB<T> {
  async save(path: string, data: T): Promise<T> {
    try {
      await dataBase
        .firestore()
        .collection(`${basePath}/${path}`)
        .add(data)

      return data;
    } catch (error) {
      return error
    }
  }

  async getAll(path: string): Promise<T[] | Error> {
    try {
      const list: T[] = []
      const query = await dataBase
        .firestore()
        .collection(`${basePath}/${path}`)
        .get()

        query.forEach(snapshot => list.push({...snapshot.data() as T, id: snapshot.id }));
      return list
    } catch (error) {
      return error
    }
  }

  async getById(path: string, id: string): Promise<T | Error> {
    const data: T | Error = await dataBase
      .firestore()
      .collection(`${basePath}/${path}`)
      .doc(id)
      .get()
      .then((snapshot) => {
        return snapshot.data() as T;
      })
      .catch((err: Error) => {
        return err;
      });

    return data;
  }

  async update(path: string, id: string, newData: T): Promise<T | void> {
    await dataBase
      .firestore()
      .collection(`${basePath}/${path}`)
      .doc(id)
      .update(newData)

    return newData;
  }
}
