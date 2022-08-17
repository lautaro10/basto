import { Animal } from "../../domain/models/Animal";
import { AnimalRepository } from "../../domain/repositories/AnimalRepository";
import { Http } from "../../domain/repositories/Http";

// Repository we need to perform animal operations.
export const animalRepository = (client: Http): AnimalRepository => ({
  getAnimals: async () => {
    const animals = await client.get<Animal>();
    return animals["data"].map(
      (animal: Animal): Animal => ({
        id: animal.id,
        animalType: animal.animalType,
        weight: animal.weight,
        deviceType: animal.deviceType,
        deviceNumber: animal.deviceNumber,
        farmName: animal.farmName,
      })
    );
  },

  deleteAnimal: async (id: string) => {
    const animal = await client.delete<Animal>('', { id });
    return animal["data"];
  },

  addAnimal: async (animal: Animal) => {
    const response = await client.post<Animal>("", animal);
    return response["data"];
  },

  updateAnimal: async (animal: Animal) => {
    const response = await client.put<Animal>("", animal);
    return response["data"];
  },
});
