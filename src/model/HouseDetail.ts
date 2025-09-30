import type { Apartment } from "./Apartment.ts";
import type { Position } from "./Position.ts";
import { HouseType } from "../constants/HouseTypes.ts";


export type HouseDetail = {
  id: string;
  name: string;
  position: Position;
  apartments: Apartment[];
  type: HouseType;
  situationImage: string;
  housePlans: string[];

};
