import type { HouseDetail } from "../model/HouseDetail.ts";
import { Container, Stack, Typography } from "@mui/material";
import { DataGridPremium, type DataGridPremiumProps, type GridColDef } from "@mui/x-data-grid-premium";
import type { Apartment } from "../model/Apartment.ts";
import { useCallback } from "react";
import { PropertyDetail } from "./PropertyDetail.tsx";

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
  const getDetailPanelContent = useCallback<NonNullable<DataGridPremiumProps["getDetailPanelContent"]>>(
    ({ row }) => <PropertyDetail data={row} />,
    []
  );

  const getDetailPanelHeight = useCallback(() => 400, []);

  return (
    <Container>
      <Stack pb={6}>
        <Typography variant={"h3"}>{house.name}</Typography>
        <DataGridPremium
          rows={house.apartments}
          columns={columns}
          getDetailPanelHeight={getDetailPanelHeight}
          getDetailPanelContent={getDetailPanelContent}
          disableRowSelectionOnClick
          hideFooter
        />
      </Stack>
    </Container>
  );
};
