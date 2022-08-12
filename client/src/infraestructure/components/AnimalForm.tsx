import { useForm, Controller } from "react-hook-form";
import {
  Animal,
  AnimalTypeEnum,
  DeviceTypeEnum,
} from "../../domain/models/Animal";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const AnimalForm = ({ defaultValues, onSubmitEvent, isEdition }: any) => {

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <Controller
          name="id"
          control={control}
          rules={{ required: true, maxLength: 16 }}
          render={({ field }) => (
            <TextField id="id" placeholder="Id*" disabled={isEdition} {...field} />
          )}
        />
        {errors.id?.type === "required" && "Id es requerido"}
        {errors.id?.type === "maxLength" && "La longitud maxima es 16"}
        <Controller
          name="animalType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl>
              <InputLabel id="demo-simple-select-label">Tipo Animal</InputLabel>
              <Select {...field}>
                <MenuItem value={AnimalTypeEnum.NOVILLO}>
                  {AnimalTypeEnum.NOVILLO}
                </MenuItem>
                <MenuItem value={AnimalTypeEnum.TORO}>
                  {AnimalTypeEnum.TORO}
                </MenuItem>
                <MenuItem value={AnimalTypeEnum.VAQUILLONA}>
                  {AnimalTypeEnum.VAQUILLONA}
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.animalType?.type === "required" &&
          "El tipo de animal es requerido"}
        <Controller
          name="weight"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField id="weight" placeholder="Weight*" {...field} />
          )}
        />
        {errors.weight && <p>This is required.</p>}
        <Controller
          name="farmName"
          control={control}
          rules={{ required: true, maxLength: 200 }}
          render={({ field }) => (
            <TextField id="farmName" placeholder="farmName*" {...field} />
          )}
        />
        {errors.farmName?.type === "required" &&
          "El nombre del campo es requerido"}
        {errors.farmName?.type === "maxLength" && "La longitud maxima es 200"}
        <Controller
          name="deviceType"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Tipo Dispositivo
              </InputLabel>
              <Select {...field}>
                <MenuItem value={DeviceTypeEnum.CARAVANA}>
                  {DeviceTypeEnum.CARAVANA}
                </MenuItem>
                <MenuItem value={DeviceTypeEnum.COLLAR}>
                  {DeviceTypeEnum.COLLAR}
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.deviceType?.type === "required" &&
          "El tipo de dispositivo es requerido"}
        <Controller
          name="deviceNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="deviceNumber"
              placeholder="deviceNumber*"
              {...field}
            />
          )}
        />
        {errors.deviceType?.type === "required" &&
          "El número de dispositivo es requerido"}
        <input type="submit" />
      </form>
    </>
  );
};
export default AnimalForm;
