import { useNavigate } from "react-router-dom";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import { useCallback, useEffect, useState } from "react";
import AnimalsList from "../components/AnimalsList";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Animals = () => {
  const [animals, setAnimals] = useState<Animal[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getAnimals = useCallback(async () => {
    setLoading(true);
    try {
      const responseAnimals = await AnimalService(
        AnimalRepositoryFake
      ).getAnimals();
      setAnimals(responseAnimals);
      setLoading(false);
    } catch (exception) {
      setLoading(false);
    }
  }, []);

  const deleteAnimal = useCallback(async (id: string) => {
    try {
      await AnimalService(AnimalRepositoryFake).deleteAnimal(id);
      getAnimals();
    } catch (exception) {}
  }, []);

  const navigateToEditAnimal = (params: Animal) =>
    navigate("/update", { state: params });

  const navigateToAddAnimal = () => navigate("/add");

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <Box paddingLeft={5}>
        <h2>Establecimiento ganadero</h2>
      </Box>
      <Box paddingLeft={5}>
        <Button variant="contained" onClick={() => navigateToAddAnimal()}>
          Crear nuevo animal
        </Button>
      </Box>
      <Box padding={5}>
        <AnimalsList
          animals={animals}
          deleteAnimal={(id: string) => deleteAnimal(id)}
          updateAnimal={(animal: Animal) => navigateToEditAnimal(animal)}
          loading={loading}
        />
      </Box>
    </>
  );
};

export default Animals;
