import { CarGeneration } from "./car-generation.interface";

export interface CarModel {
  external_id: number;
  id: number;
  generations?: CarGeneration[];
  name: string;
}