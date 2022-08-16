import { Animal } from "../../domain/models/Animal";

export type AnimalListType = {
  animals?: Animal[];
  deleteAnimal: (id: string) => void;
  updateAnimal: (animal: Animal) => void;
  loading: boolean;
};
