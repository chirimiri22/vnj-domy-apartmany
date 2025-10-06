import { Stack, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext.tsx";
import { DataGridPremium, type GridColDef, type GridRowsProp, gridClasses } from "@mui/x-data-grid-premium";

export type StandardItem = {
  category: string;
  description: string;
};

type Props = {
  title?: string;
  standartItems: StandardItem[];

};

export const StandartsGrid = ({title, standartItems}: Props) => {
  const { t } = useLanguage();



  // Převod na DataGrid rows (musí mít unikátní id)
  const rows: GridRowsProp = standartItems.map((item, index) => ({
    id: index + 1,
    category: item.category,
    description: item.description,
  }));

  const columns: GridColDef[] = [
    {
      field: "category",
      headerName: t("standards.columns.category"),
      flex: 1,
      minWidth: 100,
    },
    {
      field: "description",
      headerName: t("standards.columns.description"),
      flex: 2,
      minWidth: 400,
      cellClassName: "description-cell",
    },
  ];

  return (
    <>
      <Typography variant={"h3"}>{title}</Typography>
      <Stack>
        <DataGridPremium
          getRowHeight={() => "auto"}
          rows={rows}
          columns={columns}
          hideFooter
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
            },
            "& .MuiDataGrid-row:hover": {
              cursor: "pointer",
            },
            "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
          }}
        />
      </Stack>
    </>
  );
};
