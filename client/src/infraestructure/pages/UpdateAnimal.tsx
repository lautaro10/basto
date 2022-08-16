import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import AnimalForm from "../components/AnimalForm";
import useToast from "../hooks/useToast";

const UpdateAnimal = () => {
  const [defaultVal, setDefaultVal] = useState({});
  const { open, openToast, closeToast, message } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      const { id, animalType, weight, farmName, deviceNumber, deviceType } =
        location.state as Animal;
      setDefaultVal({
        id,
        animalType,
        weight,
        deviceType,
        deviceNumber,
        farmName,
      });
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  const onSubmit = async (animal: Animal) => {
    if (JSON.stringify(animal) === JSON.stringify(defaultVal)) {
      return openToast("No hay cambios realizados en el formulario");
    }
    try {
      await AnimalService(AnimalRepositoryFake).updateAnimal(animal);
      openToast("Animal Editado correctamente");
    } catch (exception) {
      openToast("El animal no pudo ser editado");
    }
  };

  const navigateToHome = () => navigate("/");

  return (
    <>
      <Box paddingLeft={5}>
        <h2>Editar animal</h2>
      </Box>
      {Object.keys(defaultVal).length > 0 && (
        <AnimalForm
          defaultValues={defaultVal}
          onSubmitEvent={(animal: Animal) => onSubmit(animal)}
          onCancelEvent={navigateToHome}
          isEdition={true}
        />
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={closeToast}
        message={message}
      />
    </>
  );
};

export default UpdateAnimal;
