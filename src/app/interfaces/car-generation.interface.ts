import { CarModel } from "./car-model.interface";
import { CarSerie } from "./car-serie.interface";
import { CarType } from "./car-type.interface";

export interface CarGeneration {
  id: number;
  external_id: number;
  name: string;

  model: number | CarModel;

  year_begin?: number | null;
  year_end?: number | null;

  series?: CarSerie[];

  date_create?: number | null;
  date_update?: number | null;

  car_type: number | CarType;
}