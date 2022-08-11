import { Animal } from "../models/Animal";
import { AnimalRepository } from "../repositories/AnimalRepository";

export const AnimalService = (
  repository: AnimalRepository
): AnimalRepository => ({
  getAnimals: () => {
    return repository.getAnimals();
  },
  // addAnimal: (animal: Animal) => {
  //   return repository.addAnimal(animal);
  // },
  deleteAnimal: (id: string) => {
    return repository.deleteAnimal(id);
  },
});
