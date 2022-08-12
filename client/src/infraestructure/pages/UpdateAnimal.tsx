import AnimalForm from "../components/AnimalForm";
import { useLocation } from "react-router-dom";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

const UpdateAnimal = () => {
    const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const { id, animalType, weight, farmName, deviceNumber, deviceType } =
    location.state as Animal;

  const defaultValues: Animal = {
    id: id,
    animalType: animalType,
    weight: weight,
    deviceType: deviceType,
    deviceNumber: deviceNumber,
    farmName: farmName,
  };

  const onSubmit = async(data: Animal) => {
    try {
      const responseAnimals = await AnimalService(
        AnimalRepositoryFake
      ).updateAnimal(data);
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
        isEdition={true}
      />{" "}
      <Snackbar open={open} onClose={onCloseToast} message="Editado correctamente" />{" "}
    </>
  );
};

export default UpdateAnimal;
