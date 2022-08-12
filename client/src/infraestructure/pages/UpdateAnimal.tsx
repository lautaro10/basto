import AnimalForm from "../components/AnimalForm";
import { useLocation } from "react-router-dom";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";
import useToast from "../hooks/useToast";

const UpdateAnimal = () => {
  const { open, openToast, closeToast } = useToast();
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

  const onSubmit = async (data: Animal) => {
    try {
      const responseAnimals = await AnimalService(
        AnimalRepositoryFake
      ).updateAnimal(data);
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
        isEdition={true}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={() => closeToast()}
        message="Animal Editado correctamente"
      />
    </>
  );
};

export default UpdateAnimal;
