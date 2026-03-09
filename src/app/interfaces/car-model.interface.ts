import { CarMake } from "./car-make.interface";
import { CarSerie } from "./car-serie.interface";
import { CarGeneration } from "./car-generation.interface";
import { CarTrim } from "./car-trim.interface";

export interface CarModel {
  id: number;
  external_id: number;
  name: string;

  car_make: number | CarMake;

  generations?: CarGeneration[];
  series?: CarSerie[];
  trims?: CarTrim[];

  date_create?: number | null;
  date_update?: number | null;
}