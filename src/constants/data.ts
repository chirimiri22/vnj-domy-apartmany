import type { HouseDetail } from "../model/HouseDetail.ts";
import { ApartmentStatus } from "../model/ApartmentStatus.ts";

export const data: HouseDetail[] = [
  {
    id: "a",
    name: "Bytový dům A",
    position: { x: 12, y: 3 },
    apartments: [
      {
        number: "A1",
        layout: "1kk",
        totalArea: 33,
        price: 7000000,
        status: ApartmentStatus.Free,
      },
    ],
  },
  {
    id: "b",
    name: "Bytový dům B",
    position: { x: 3.5, y: 8 },
    apartments: [
      {
        number: "B1",
        layout: "1kk",
        totalArea: 33,
        price: 7000000,
        status: ApartmentStatus.Free,
      },
    ],
  },
  {
    id: "c",
    name: "Bytový dům C",
    position: { x: 1.9, y: 6 },
    apartments: [
      {
        number: "C1",
        layout: "1kk",
        totalArea: 33,
        price: 7000000,
        status: ApartmentStatus.Free,
      },
    ],
  },
  {
    id: "d",
    name: "Bytový dům D",
    position: { x: 1.3, y: 6 },
    apartments: [
      {
        number: "D1",
        layout: "1kk",
        totalArea: 33,
        price: 7000000,
        status: ApartmentStatus.Free,
      },
    ],
  },
  {
    id: "e",
    name: "Bytový dům E",
    position: { x: 1.3, y: 1.7 },
    apartments: [
      {
        number: "E1",
        layout: "1kk",
        totalArea: 33,
        price: 7000000,
        status: ApartmentStatus.Free,
      },
    ],
  },
];
