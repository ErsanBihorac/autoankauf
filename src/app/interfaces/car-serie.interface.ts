import { CarModel } from "./car-model.interface";
import { CarGeneration } from "./car-generation.interface";
import { CarTrim } from "./car-trim.interface";
import { CarType } from "./car-type.interface";

export interface CarSerie {
  id: number;
  external_id: number;
  name: string;

  model: number | CarModel;
  generation?: number | CarGeneration | null;

  trims?: CarTrim[];

  date_create?: number | null;
  date_update?: number | null;

  car_type: number | CarType;
}