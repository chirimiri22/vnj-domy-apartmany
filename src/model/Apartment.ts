import { ApartmentStatus } from "./ApartmentStatus.ts";

export type Apartment = {
  id: string;
  number: string;
  layout: string; // dispozice
  usable_area: number; // uzitna plocha
  totalArea: number;
  balcony: number;
  garden: number;
  storage: number;
  garage: number;
  price: number;
  status: ApartmentStatus;
};
