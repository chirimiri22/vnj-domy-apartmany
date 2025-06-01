import type { HouseDetail } from "../model/HouseDetail.ts";
import { Container, Stack, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { Apartment } from "../model/Apartment.ts";

type Props = {
  house: HouseDetail;
};

const columns: GridColDef<Apartment>[] = [
  { field: "number", headerName: "Číslo bytu", width: 200 },
  { field: "layout", headerName: "Dispozice", width: 300 },
  { field: "totalArea", headerName: "Plocha", width: 300 },
  { field: "price", headerName: "Cena", width: 300 },
  { field: "status", headerName: "Stav", width: 300 },
];

export const PropertyList = ({ house }: Props) => {
  return (
    <Container>
      <Stack>
        <Typography variant={"h2"}>{house.name}</Typography>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={house.apartments} columns={columns} />
        </div>
      </Stack>
    </Container>
  );
};
