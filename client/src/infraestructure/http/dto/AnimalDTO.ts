export interface AnimalDTO {
  id: string;
  animalType: AnimalTypeEnum;
  weight: number;
  deviceType: DeviceTypeEnum;
  deviceNumber: string;
  farmName: string;
}

export enum AnimalTypeEnum {
  NOVILLO,
  TORO,
  VAQUILLONA,
}

export enum DeviceTypeEnum {
  COLLAR,
  CARAVANA,
}
