import { CarType } from "./car-type.interface";
import { CarModel } from "./car-model.interface";

export interface CarMake {
  id: number;
  external_id: number;
  name: string;

  car_type: number | CarType;

  models?: CarModel[];

  date_create: number;
  date_update: number;
}