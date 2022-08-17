import { Animal } from "../models/Animal";

// Methods we need to implement for repository management
export interface AnimalRepository {
  getAnimals: () => Promise<Animal[]>;
  addAnimal: (animal: Animal) => Promise<Animal>;
  updateAnimal: (animal: Animal) => Promise<Animal>;
  deleteAnimal: (id: string) => Promise<Animal>;
}
