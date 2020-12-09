import { ILocation } from "./adress"

type Species = "cat" | "dog"
type Genre = "male" | "female"
type Size = "short" | "middle" | "great"

export interface IPet {
  name: string
  specie: Species
  genre: Genre
  age: string
  images?: string[]
  description?: string
  size?: Size
  location?: ILocation
}
