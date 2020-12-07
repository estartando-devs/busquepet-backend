export interface IDB<T> {
  save: (path: string, data: T) => Promise<T>;
  getById: (path: string, id: string) => Promise<T | Error>;
}
