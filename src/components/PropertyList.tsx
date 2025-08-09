import { Container, Stack, Typography } from "@mui/material";
import { DataGridPremium, type GridColDef, type GridRowSelectionModel, useGridApiRef } from "@mui/x-data-grid-premium";
import type { Apartment } from "../model/Apartment.ts";
import { useEffect, useState } from "react";

type Props = {
  apartments: ApartmentCol[];
  onClickProperty?: (houseId: string, apartmentId: string) => void;
  selectedApartmentId?: string;
};

type ApartmentCol = Apartment & { houseId?: string; houseName?: string };
//  todo: click on row to show detail
export const columns: GridColDef<ApartmentCol>[] = [
  { field: "houseName", headerName: "Název domu", width: 120 },
  { field: "number", headerName: "Číslo bytu", width: 85 },
  { field: "layout", headerName: "Dispozice", width: 85 },
  { field: "usable_area", headerName: "Užitná plocha (m²)", width: 120 },
  { field: "totalArea", headerName: "Celková plocha (m²)", width: 120 },
  { field: "balcony", headerName: "Balkón (m²)", width: 85 },
  { field: "garden", headerName: "Zahrada (m²)", width: 110 },
  { field: "storage", headerName: "Sklep (m²)", width: 95 },
  { field: "garage", headerName: "Garáž", width: 75 },
  { field: "price", headerName: "Cena (Kč)", width: 120 },
  { field: "status", headerName: "Stav", width: 120 },
];

export const PropertyList = ({ apartments, onClickProperty, selectedApartmentId }: Props) => {
  const apiRef = useGridApiRef();

  useEffect(() => {
    if (selectedApartmentId) {
      apiRef?.current?.selectRow(selectedApartmentId, true); // highlight row
    }
  }, [selectedApartmentId, apartments, apiRef]);
  return (
    <Stack pb={6}>
      <DataGridPremium
        apiRef={apiRef}
        rows={apartments}
        columns={columns}
        onRowClick={(params) => {
          onClickProperty?.(params.row.houseId, params.row.id);
        }}
        hideFooter
      />
    </Stack>
  );
};
