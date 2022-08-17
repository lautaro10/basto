import { Animal } from "../../domain/models/Animal";

export type AnimalFormType = {
  onSubmitEvent: (data: Animal) => void;
  onCancelEvent: () => void;
  isEdition: boolean;
  defaultValues?: any;
};
