// This interface defines what attributes the animal entity will have
export type Animal = {
  id: string;
  animalType: AnimalTypeEnum;
  weight: number;
  deviceType: DeviceTypeEnum;
  deviceNumber: string;
  farmName: string;
};

// This enumeration defines what values ​​the type of animal can have
export enum AnimalTypeEnum {
  NOVILLO = "Novillo",
  TORO = "Toro",
  VAQUILLONA = "Vaquillona",
}

// This enumeration defines what values ​​the type of device can have
export enum DeviceTypeEnum {
  COLLAR = "Collar",
  CARAVANA = "Caravana",
}
