import type { Apartment } from "./Apartment.ts";

export type ApartmentCol = Apartment & { houseId?: string; houseName?: string };
