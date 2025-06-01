import { ApartmentStatus } from "./ApartmentStatus.ts";

export type Apartment = {
  number: string;
  layout: string; // dispozice
  totalArea: number;
  price: number;
  status: ApartmentStatus;
};
