import { CarModel } from "./car-model.interface";

export interface CarMake {
  external_id: number;  
  id: number;
  models?: CarModel[];
  name: string;
}