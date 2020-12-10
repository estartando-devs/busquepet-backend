import { ILocation } from "./address";

type Species = "cat" | "dog";
type Genre = "male" | "female";
type Size = "short" | "middle" | "great";

export interface IPet {
  name: string;
  specie: Species;
  genre: Genre;
  age: string;
  size?: Size;
  location?: ILocation;
  imageUrl?: string;
  donor?: string;
  adopter?: string;
  description?: string;
  vaccination?: string;
}
