import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AnimalFormType } from "../types/AnimalForm";
import { animalTypeData, deviceTypeData } from "./data/selectData";
import { Animal } from "../../domain/models/Animal";

const AnimalForm = ({
  defaultValues,
  onSubmitEvent,
  onCancelEvent,
  isEdition,
}: AnimalFormType) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Animal>({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: Animal) => {
    if (Object.keys(errors).length === 0) {
      onSubmitEvent(data);
    }
  };

  const renderMenuItems = (data: string[]) =>
    data.map((val, index) => (
      <MenuItem value={val} key={index}>
        {val}
      </MenuItem>
    ));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="id"
        control={control}
        rules={{ required: true, maxLength: 16, minLength: 16 }}
        render={({ field }) => (
          <TextField
            label="ID Senasa*"
            error={!!errors.id}
            id="id"
            {...field}
            helperText={
              <>
                {errors.id?.type === "required" && "Id es requerido"}
                {errors.id?.type === "maxLength" ||
                  (errors.id?.type === "minLength" &&
                    "La longitud debe ser de 16 caracteres")}
              </>
            }
            disabled={isEdition}
          />
        )}
      />

      <Controller
        name="animalType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <TextField
              id="animalType"
              select
              label="Tipo Animal*"
              {...field}
              error={!!errors.animalType}
              helperText={
                <>
                  {errors.animalType?.type === "required" &&
                    "El tipo de animal es requerido"}
                </>
              }
            >
              {renderMenuItems(animalTypeData)}
            </TextField>
          </>
        )}
      />

      <Controller
        name="weight"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.weight}
            id="weight"
            label="Peso*"
            helperText={
              <>
                {errors.weight?.type === "required" &&
                  "El peso del animal es requerido"}
              </>
            }
          />
        )}
      />
      <div>
        <Controller
          name="farmName"
          control={control}
          rules={{ required: true, maxLength: 200 }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.farmName}
              id="farmName"
              label="Nombre de potrero*"
              helperText={
                <>
                  {errors.farmName?.type === "required" &&
                    "El nombre del campo es requerido"}
                  {errors.farmName?.type === "maxLength" &&
                    "La longitud maxima es 200"}
                </>
              }
            />
          )}
        />
      </div>
      <Controller
        name="deviceType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              error={!!errors.deviceType}
              id="deviceType"
              select
              label="Tipo Dispositivo*"
              helperText={
                <>
                  {errors.deviceType?.type === "required" &&
                    "El tipo de dispositivo es requerido"}
                </>
              }
            >
              {renderMenuItems(deviceTypeData)}
            </TextField>
          </>
        )}
      />
      <Controller
        name="deviceNumber"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.deviceNumber}
            id="deviceNumber"
            label="Número de dispositivo*"
            helperText={
              <>
                {errors.deviceNumber?.type === "required" &&
                  "El número de dispositivo es requerido"}
              </>
            }
          />
        )}
      />
      <div style={{}}>
        <Button
          variant="contained"
          onClick={onCancelEvent}
          style={{ marginRight: "30px" }}
        >
          Cancelar
        </Button>
        <Button type="submit" variant="contained">
          {isEdition ? "Editar" : "Agregar"}
        </Button>
      </div>
    </Box>
  );
};
export default AnimalForm;
