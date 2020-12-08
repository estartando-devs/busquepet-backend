export interface IDB<T> {
  save: (path: string, data: T) => Promise<T | Error>;
  getAll: (path: string) => Promise<T[] | Error>;
  getById: (path: string, id: string) => Promise<T | Error>;
}
