import { useForm, Controller } from "react-hook-form";
import {
  Animal,
  AnimalTypeEnum,
  DeviceTypeEnum,
} from "../../domain/models/Animal";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import { useNavigate } from "react-router-dom";

const AnimalForm = ({ defaultValues, onSubmitEvent, isEdition }: any) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Animal>({
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: Animal) => {
    onSubmitEvent(data);
    if (Object.keys(errors).length === 0) {
      onSubmitEvent(data);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="id"
        control={control}
        rules={{ required: true, maxLength: 16 }}
        render={({ field }) => (
          <TextField
            label="ID Senasa*"
            error={!!errors.id}
            id="id"
            {...field}
            helperText="Ingrese id de senasa"
            disabled={isEdition}
          />
        )}
      />
      <FormHelperText>
        {errors.id?.type === "required" && "Id es requerido"}
        {errors.id?.type === "maxLength" && "La longitud maxima es 16"}
      </FormHelperText>

      <Controller
        name="animalType"
        control={control}
        rules={{ required: true }}
        render={() => (
          <>
            <TextField id="animalType" select label="Tipo Animal">
              <MenuItem value={AnimalTypeEnum.NOVILLO}>
                {AnimalTypeEnum.NOVILLO}
              </MenuItem>
              <MenuItem value={AnimalTypeEnum.TORO}>
                {AnimalTypeEnum.TORO}
              </MenuItem>
              <MenuItem value={AnimalTypeEnum.VAQUILLONA}>
                {AnimalTypeEnum.VAQUILLONA}
              </MenuItem>
            </TextField>
          </>
        )}
      />
      <FormHelperText>
        {errors.animalType?.type === "required" &&
          "El tipo de animal es requerido"}
      </FormHelperText>

      <Controller
        name="weight"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            id="weight"
            label="Weight*"
            helperText="Ingrese el peso del animal"
          />
        )}
      />
      {errors.weight && <p>This is required.</p>}
      <div>
        <Controller
          name="farmName"
          control={control}
          rules={{ required: true, maxLength: 200 }}
          render={({ field }) => (
            <TextField
              {...field}
              id="farmName"
              label="farmName*"
              helperText="Ingrese nombre del potrero"
            />
          )}
        />
        <FormHelperText>
          {errors.farmName?.type === "required" &&
            "El nombre del campo es requerido"}
          {errors.farmName?.type === "maxLength" && "La longitud maxima es 200"}
        </FormHelperText>
      </div>
      <Controller
        name="deviceType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              id="deviceType"
              select
              label="Tipo Dispositivo"
            >
              <MenuItem value={DeviceTypeEnum.CARAVANA}>
                {DeviceTypeEnum.CARAVANA}
              </MenuItem>
              <MenuItem value={DeviceTypeEnum.COLLAR}>
                {DeviceTypeEnum.COLLAR}
              </MenuItem>
            </TextField>
          </>
        )}
      />
      <FormHelperText>
        {errors.deviceType?.type === "required" &&
          "El tipo de dispositivo es requerido"}
      </FormHelperText>
      <Controller
        name="deviceNumber"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            id="deviceNumber"
            label="Número de dispositivo*"
            helperText="Ingrese número de dispositivo"
          />
        )}
      />
      <FormHelperText>
        {errors.deviceType?.type === "required" &&
          "El número de dispositivo es requerido"}
      </FormHelperText>
      <div style={{ display: "flex", justifyItems: "space-around" }}>
        <Button type="submit" variant="outlined">
          {isEdition ? "Agregar" : "Editar"}
        </Button>
        <Button type="submit" variant="outlined" onClick={() => navigate("/")}>
          Volver
        </Button>
      </div>
    </Box>
  );
};
export default AnimalForm;
