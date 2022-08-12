export type Animal = {
  id: string;
  animalType: AnimalTypeEnum;
  weight: number;
  deviceType: DeviceTypeEnum;
  deviceNumber: string;
  farmName: string;
};

export enum AnimalTypeEnum {
  NOVILLO = "Novillo",
  TORO = "Toro",
  VAQUILLONA = "Vaquillona",
}

export enum DeviceTypeEnum {
  COLLAR = "Collar",
  CARAVANA = "Caravana",
}
