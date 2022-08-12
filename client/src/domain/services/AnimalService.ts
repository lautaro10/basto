import { Animal } from "../models/Animal";
import { AnimalRepository } from "../repositories/AnimalRepository";

export const AnimalService = (
  repository: AnimalRepository
): AnimalRepository => ({
  getAnimals: () => {
    return repository.getAnimals();
  },
  addAnimal: (animal: Animal) => {
    return repository.addAnimal(animal);
  },
  updateAnimal: (animal: Animal) => {
    return repository.updateAnimal(animal);
  },
  deleteAnimal: (id: string) => {
    return repository.deleteAnimal(id);
  },
});
