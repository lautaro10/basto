import { Animal } from "../../domain/models/Animal";
import DeleteIcon from "@mui/icons-material/Delete";
import usePagination from "../hooks/usePagination";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AnimalsList =({
  animals,
  deleteAnimal,
  updateAnimal,
  loading,
}: {
  animals?: Animal[];
  deleteAnimal: any;
  updateAnimal: any;
  loading: boolean;
}) => {
  const { rowsPerPage, setRowsPerPage } = usePagination();

  const renderDetailsButton = (params: any) => {
    return (
      <>
        <Button onClick={() => deleteAnimal(params.id)}>
          <DeleteIcon color="error" />
        </Button>
        <Button onClick={() => updateAnimal(params.row)}>
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
