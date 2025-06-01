import type { Apartment } from "./Apartment.ts";
import type { Position } from "./Position.ts";

export type HouseDetail = {
  id: string;
  name: string;
  position: Position;
  apartments: Apartment[];
};
