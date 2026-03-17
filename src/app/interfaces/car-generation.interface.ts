import { CarSerie } from "./car-serie.interface";

export interface CarGeneration {
  external_id: number;
  id: number;
  name: string;
  series?: CarSerie[];
  year_begin?: number | null;
  year_end?: number | null;
}