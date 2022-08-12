import { useCallback, useEffect, useState } from "react";
import { Animal } from "../../domain/models/Animal";
import { AnimalService } from "../../domain/services/AnimalService";
import { AnimalRepositoryFake } from "../instances/AnimalRepositoryFake";
import DeleteIcon from "@mui/icons-material/Delete";
import usePagination from "../hooks/usePagination";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function AnimalsList() {
  const [animals, setAnimals] = useState<Animal[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const { rowsPerPage, setRowsPerPage } = usePagination();
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

  const renderDetailsButton = (params: any) => {
    return (
      <>
        <Button onClick={() => deleteAnimal(params.id)}>
          <DeleteIcon color="error" />
        </Button>
        <Button onClick={() => navigateToForm(params.row)}>
          <CreateIcon />
        </Button>
      </>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "animalType", headerName: "Tipo Animal", width: 150 },
    { field: "weight", headerName: "Peso (Kg)", width: 150 },
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

  const QuickSearchToolbar = () => {
    return (
      <Box sx={{ p: 2 }}>
        <GridToolbarQuickFilter
          placeholder="Busqueda"
          quickFilterParser={(searchInput: string) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        />
      </Box>
    );
  };

  return (
    <div style={{ width: "80%" }}>
      <DataGrid
        columns={columns}
        rows={animals || []}
        disableColumnMenu
        loading={loading}
        pageSize={rowsPerPage}
        onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
        rowsPerPageOptions={[5, 10]}
        pagination
        autoHeight
        sx={{
          boxShadow: 2,
          border: 2,
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </div>
  );
}

export default AnimalsList;
