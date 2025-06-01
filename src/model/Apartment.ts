import { ApartmentStatus } from "./ApartmentStatus.ts";

export type Apartment = {
  id: string;
  number: string;
  layout: string; // dispozice
  totalArea: number;
  price: number;
  status: ApartmentStatus;
};
