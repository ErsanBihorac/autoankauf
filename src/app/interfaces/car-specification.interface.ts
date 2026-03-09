import { CarType } from "./car-type.interface";

export interface CarSpecification {
  id: number;
  external_id: number;
  name: string;

  parent?: number | CarSpecification | null;
  children?: CarSpecification[];

  date_create?: number | null;
  date_update?: number | null;

  car_type: number | CarType;
}