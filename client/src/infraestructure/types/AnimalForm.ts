import { Animal } from "../../domain/models/Animal";

// Type for animal form
export type AnimalFormType = {
  onSubmitEvent: (data: Animal) => void;
  onCancelEvent: () => void;
  isEdition: boolean;
  defaultValues?: any;
};
