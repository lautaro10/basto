import { useState } from "react";
import {
  Animal,
  AnimalTypeEnum,
  DeviceTypeEnum,
} from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import AnimalForm from "../components/AnimalForm";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";

const NewAnimal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const defaultValues: Animal = {
    id: "",
    animalType: AnimalTypeEnum.NOVILLO,
    weight: 0,
    deviceType: DeviceTypeEnum.CARAVANA,
    deviceNumber: "",
    farmName: "",
  };

  const onSubmit = async(data: Animal) => {
    try {
      const responseAnimals = await AnimalService(
        AnimalRepositoryFake
      ).addAnimal(data);
      setOpen(true);
    } catch (exception) {
      console.log("Err");
    }
  };

  const onCloseToast = () => setOpen(false);

  return (
    <>
      <AnimalForm
        defaultValues={defaultValues}
        onSubmitEvent={(data: Animal) => onSubmit(data)}
        isEdition={false}
      />{" "}
      <Snackbar open={open} onClose={onCloseToast} message="Agregado correctamente" />{" "}
    </>
  );
};

export default NewAnimal;
