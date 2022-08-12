import {
  Animal,
  AnimalTypeEnum,
  DeviceTypeEnum,
} from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import AnimalForm from "../components/AnimalForm";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";
import useToast from "../hooks/useToast";

const NewAnimal = () => {
  const { open, openToast, closeToast } = useToast();

  const defaultValues: Animal = {
    id: "",
    animalType: AnimalTypeEnum.NOVILLO,
    weight: 0,
    deviceType: DeviceTypeEnum.CARAVANA,
    deviceNumber: "",
    farmName: "",
  };

  const onSubmit = async (data: Animal) => {
    try {
      await AnimalService(AnimalRepositoryFake).addAnimal(data);
      openToast();
    } catch (exception) {
      console.log("Err");
    }
  };

  return (
    <>
      <AnimalForm
        defaultValues={defaultValues}
        onSubmitEvent={(data: Animal) => onSubmit(data)}
        isEdition={false}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={closeToast}
        message="Animal agregado correctamente"
      />
    </>
  );
};

export default NewAnimal;
