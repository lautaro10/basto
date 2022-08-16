import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import AnimalForm from "../components/AnimalForm";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";
import useToast from "../hooks/useToast";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const NewAnimal = () => {
  const navigate = useNavigate();
  const { open, openToast, closeToast, message } = useToast();

  const onSubmit = async (animal: Animal) => {
    try {
      await AnimalService(AnimalRepositoryFake).addAnimal(animal);
      openToast("Animal agregado correctamente");
    } catch (exception) {
      openToast("El animal no pudo ser agregado");
    }
  };

  const navigateToHome = () => navigate("/");

  return (
    <>
      <Box paddingLeft={5}>
        <h2>Nuevo animal</h2>
      </Box>
      <AnimalForm
        onSubmitEvent={(animal: Animal) => onSubmit(animal)}
        onCancelEvent={navigateToHome}
        isEdition={false}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={closeToast}
        message={message}
      />
    </>
  );
};

export default NewAnimal;
