import { Animal } from "../../domain/models/Animal";
import { AnimalRepository } from "../../domain/repositories/AnimalRepository";
import { Http } from "../../domain/repositories/Http";
// import { AnimalDTO } from "../http/dto/AnimalDTO";

export const animalRepository = (client: Http): AnimalRepository => ({
  getAnimals: async () => {
    const animals = await client.get<Animal>("");
    return animals["data"].map(
      (animal: any): Animal => ({
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
    const animal = await client.delete<Animal>("",{id });
    return animal["data"];
  },
});
