import { CarMake } from "./car-make.interface";

export interface CarType {
  id: number;
  external_id: number;
  name: string;

  makes?: CarMake[];

  date_create?: number | null;
  date_update?: number | null;
}