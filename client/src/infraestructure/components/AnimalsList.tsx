import React, { useCallback, useState } from "react";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import MenuIcon from "@mui/icons-material/Menu";
import usePagination from "../hooks/usePagination";
import { DataGrid } from "@mui/x-data-grid";

function AnimalsList() {
  const [animals, setAnimals] = useState<Animal[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { rowsPerPage, setRowsPerPage } = usePagination();

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
      const responseAnimals = await AnimalService(
        AnimalRepositoryFake
      ).deleteAnimal(id);
      getAnimals();
    } catch (exception) {}
  }, []);

  const deleteAnimalModal = (id: string) => {
    deleteAnimal(id);
  };

  React.useEffect(() => {
    getAnimals();
  }, []);

  const renderDetailsButton = (params: any) => {
    return <MenuIcon onClick={() => deleteAnimalModal(params.id)} />;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "animalType", headerName: "Tipo Animal", width: 150 },
    { field: "weight", headerName: "Peso&nbsp;(Kg)", width: 150 },
    { field: "deviceType", headerName: "Tipo Dispositivo", width: 150 },
    { field: "deviceNumber", headerName: "Número Dispositivo", width: 150 },
    { field: "farmName", headerName: "Nombre Potrero", width: 150 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: renderDetailsButton,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={animals || []}
        disableColumnMenu
        loading={loading}
        pageSize={rowsPerPage}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        autoHeight
      />
    </div>
  );
}

export default AnimalsList;
