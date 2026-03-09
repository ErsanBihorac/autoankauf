import { CarTrim } from "./car-trim.interface";

export interface CarSerie {
  external_id: number;
  id: number;
  name: string;
  trims?: CarTrim[];
}