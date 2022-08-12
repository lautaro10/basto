import { useNavigate } from "react-router-dom";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import { useCallback, useEffect, useState } from "react";
import AnimalsList from "../components/AnimalsList";

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

  const navigateToForm = (params: Animal) => {
    navigate("/update", { state: params });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <AnimalsList
      animals={animals}
      deleteAnimal={(id: string) => deleteAnimal(id)}
      updateAnimal={(animal: Animal) => navigateToForm(animal)}
      loading={loading}
    />
  );
};

export default Animals;
