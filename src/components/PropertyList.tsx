import {  Stack,  } from "@mui/material";
import { DataGridPremium, type GridColDef, useGridApiRef } from "@mui/x-data-grid-premium";
import type { Apartment } from "../model/Apartment.ts";
import { useEffect, } from "react";
import { useLanguage } from "../contexts/LanguageContext";

type Props = {
  apartments: ApartmentCol[];
  onClickProperty?: (houseId: string, apartmentId: string) => void;
  selectedApartmentId?: string;
};

type ApartmentCol = Apartment & { houseId?: string; houseName?: string };

//  todo: click on row to show detail
export const PropertyList = ({ apartments, onClickProperty, selectedApartmentId }: Props) => {
  const { t } = useLanguage();
  const apiRef = useGridApiRef();

  const columns: GridColDef<ApartmentCol>[] = [
    { field: "houseName", headerName: t("propertyList.columns.houseName"), width: 120 },
    { field: "number", headerName: t("propertyList.columns.apartmentNumber"), width: 85 },
    { field: "layout", headerName: t("propertyList.columns.layout"), width: 85 },
    { field: "usable_area", headerName: t("propertyList.columns.usableArea"), width: 120 },
    { field: "totalArea", headerName: t("propertyList.columns.totalArea"), width: 120 },
    { field: "balcony", headerName: t("propertyList.columns.balcony"), width: 85 },
    { field: "garden", headerName: t("propertyList.columns.garden"), width: 110 },
    { field: "storage", headerName: t("propertyList.columns.storage"), width: 95 },
    { field: "garage", headerName: t("propertyList.columns.garage"), width: 75 },
    { field: "price", headerName: t("propertyList.columns.price"), width: 120 },
    {
      field: "status",
      headerName: t("propertyList.columns.status"),
      width: 120,
      renderCell: (params) => {
        const statusKey = params.value as string;
        return t(`apartmentStatus.${statusKey}`);
      }
    },
  ];

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
