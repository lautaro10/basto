import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import AnimalForm from "../components/AnimalForm";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";
import useToast from "../hooks/useToast";
import Box from "@mui/material/Box";

const NewAnimal = () => {
  const { open, openToast, closeToast } = useToast();

  const onSubmit = async (animal: Animal) => {
    try {
      await AnimalService(AnimalRepositoryFake).addAnimal(animal);
      openToast();
    } catch (exception) {
      console.log("Err");
    }
  };

  return (
    <>
      <Box paddingLeft={5}>
        <h2>Nuevo animal</h2>
      </Box>
      <AnimalForm
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
