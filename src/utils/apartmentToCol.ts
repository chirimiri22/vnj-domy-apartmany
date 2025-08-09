import type { HouseDetail } from "../model/HouseDetail.ts";
import type { Apartment } from "../model/Apartment.ts";
import type { ApartmentCol } from "../model/ApartmentCol.ts";

export const apartmentToCol = (apartment: Apartment, house: HouseDetail): ApartmentCol => {
  return { ...apartment, houseId: house.id, houseName: house.name };
};
