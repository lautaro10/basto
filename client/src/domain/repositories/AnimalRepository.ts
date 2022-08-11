import { Animal } from "../models/Animal";

export interface AnimalRepository {
  getAnimals: () => Promise<Animal[]>;
  // addAnimal: (animal: Animal) => Promise<Animal[]>;
  deleteAnimal: (id: string) => Promise<Animal[]>;
}
