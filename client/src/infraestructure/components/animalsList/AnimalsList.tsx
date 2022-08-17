import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridToolbarQuickFilter, esES } from "@mui/x-data-grid";
import CreateIcon from "@mui/icons-material/Create";
import { Button, Box } from "@mui/material";
import usePagination from "../../hooks/usePagination";
import { transformValueToArray } from "../../utils/searchValue";
import { AnimalListType } from "../../types/AnimalList";

const AnimalsList = ({
  animals,
  deleteAnimal,
  updateAnimal,
  loading,
}: AnimalListType) => {
  const { rowsPerPage, setRowsPerPage } = usePagination();

  const renderDetailsButton = (params: any) => {
    return (
      <>
        <Button onClick={() => updateAnimal(params.row)}>
          <CreateIcon />
        </Button>
        <Button onClick={() => deleteAnimal(params.id)}>
          <DeleteIcon color="error" />
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
    { field: "farmName", headerName: "Nombre Potrero", flex: 1, minWidth: 150 },
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
          quickFilterParser={(searchInput: string) => transformValueToArray(searchInput)}
        />
      </Box>
    );
  };

  return (
    <DataGrid
      columns={columns}
      rows={animals || []}
      disableColumnMenu
      loading={loading}
      pageSize={rowsPerPage}
      onPageSizeChange={(newPageSize: number) => setRowsPerPage(newPageSize)}
      rowsPerPageOptions={[5, 10]}
      pagination
      autoHeight
      sx={{
        width: "100%",
        boxShadow: 1,
        border: 1,
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
      }}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      components={{ Toolbar: QuickSearchToolbar }}
    />
  );
};

export default AnimalsList;
