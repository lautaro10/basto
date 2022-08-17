import { Animal } from "../../domain/models/Animal";

// Type for animals list
export type AnimalListType = {
  animals?: Animal[];
  deleteAnimal: (id: string) => void;
  updateAnimal: (animal: Animal) => void;
  loading: boolean;
};
