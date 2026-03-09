import { CarSerie } from "./car-serie.interface";
import { CarModel } from "./car-model.interface";
import { CarType } from "./car-type.interface";

export interface CarTrim {
  id: number;
  external_id: number;
  name: string;

  serie?: number | CarSerie | null;
  model: number | CarModel;

  start_production_year?: number | null;
  end_production_year?: number | null;

  date_create?: number | null;
  date_update?: number | null;

  car_type: number | CarType;
}