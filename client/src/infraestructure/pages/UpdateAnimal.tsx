import AnimalForm from "../components/AnimalForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import Snackbar from "@mui/material/Snackbar";
import useToast from "../hooks/useToast";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

const UpdateAnimal = () => {
  const [defaultVal, setDefaultVal] = useState({});
  const { open, openToast, closeToast } = useToast();
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

  const onSubmit = async (data: Animal) => {
    try {
      await AnimalService(AnimalRepositoryFake).updateAnimal(data);
      openToast();
    } catch (exception) {
      console.log("Err");
    }
  };

  return (
    <>
      <Box paddingLeft={5}>
        <h2>Editar animal</h2>
      </Box>
      {Object.keys(defaultVal).length > 0 && (
        <AnimalForm
          defaultValues={defaultVal}
          onSubmitEvent={(data: Animal) => onSubmit(data)}
          isEdition={true}
        />
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={closeToast}
        message="Animal Editado correctamente"
      />
    </>
  );
};

export default UpdateAnimal;
