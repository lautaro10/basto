import { useForm, Controller } from "react-hook-form";
import { TextField, MenuItem, Box, Button } from "@mui/material";
import { AnimalFormType } from "../../types/AnimalForm";
import { animalTypeData, deviceTypeData } from "../data/selectData";
import {
  Animal,
  AnimalTypeEnum,
  DeviceTypeEnum,
} from "../../../domain/models/Animal";

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
    defaultValues: defaultValues
      ? defaultValues
      : {
          id: "",
          animalType: AnimalTypeEnum.NOVILLO,
          weight: "",
          deviceType: DeviceTypeEnum.CARAVANA,
          deviceNumber: "",
          farmName: "",
        },
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
              <span role="alert">
                {errors.id?.type === "required" && "Id es requerido"}
                {(errors.id?.type === "maxLength" ||
                  errors.id?.type === "minLength") &&
                  "La longitud debe ser de 16 caracteres"}
              </span>
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
                <span role="alert">
                  {errors.animalType?.type === "required" &&
                    "El tipo de animal es requerido"}
                </span>
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
            type="number"
            label="Peso*"
            helperText={
              <span role="alert">
                {errors.weight?.type === "required" &&
                  "El peso del animal es requerido"}
                {errors.weight?.type === "min" &&
                  "El peso del animal debe ser mayor a cero"}
              </span>
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
                <span role="alert">
                  {errors.farmName?.type === "required" &&
                    "El nombre del campo es requerido"}
                  {errors.farmName?.type === "maxLength" &&
                    "La longitud maxima es 200"}
                </span>
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
                <span role="alert">
                  {errors.deviceType?.type === "required" &&
                    "El tipo de dispositivo es requerido"}
                </span>
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
              <span role="alert">
                {errors.deviceNumber?.type === "required" &&
                  "El número de dispositivo es requerido"}
              </span>
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
