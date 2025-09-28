import { Container, Stack, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { DataGridPremium, gridClasses, type GridColDef, type GridRowsProp } from "@mui/x-data-grid-premium";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StandardItem = {
  category: string;
  description: string;
};

export const Standards = () => {
  const { t } = useLanguage();

  const standardsData: StandardItem[] = [
    { category: t("standards.categories.foundation"), description: t("standards.descriptions.foundation") },
    { category: t("standards.categories.exteriorWalls"), description: t("standards.descriptions.exteriorWalls") },
    { category: t("standards.categories.ceiling"), description: t("standards.descriptions.ceiling") },
    { category: t("standards.categories.stairs"), description: t("standards.descriptions.stairs") },
    { category: t("standards.categories.roof"), description: t("standards.descriptions.roof") },
    { category: t("standards.categories.partitions"), description: t("standards.descriptions.partitions") },
    { category: t("standards.categories.interiorPlaster"), description: t("standards.descriptions.interiorPlaster") },
    { category: t("standards.categories.facades"), description: t("standards.descriptions.facades") },
    { category: t("standards.categories.openings"), description: t("standards.descriptions.openings") },
    { category: t("standards.categories.sheetMetal"), description: t("standards.descriptions.sheetMetal") },
    { category: t("standards.categories.floors"), description: t("standards.descriptions.floors") },
    { category: t("standards.categories.tiles"), description: t("standards.descriptions.tiles") },
    { category: t("standards.categories.laminateFloors"), description: t("standards.descriptions.laminateFloors") },
    { category: t("standards.categories.pavedAreas"), description: t("standards.descriptions.pavedAreas") },
    { category: t("standards.categories.fencing"), description: t("standards.descriptions.fencing") },
    { category: t("standards.categories.waterMeters"), description: t("standards.descriptions.waterMeters") },
    { category: t("standards.categories.heating"), description: t("standards.descriptions.heating") },
    { category: t("standards.categories.electrical"), description: t("standards.descriptions.electrical") },
    { category: t("standards.categories.ventilation"), description: t("standards.descriptions.ventilation") },
    { category: t("standards.categories.furniture"), description: t("standards.descriptions.furniture") },
  ];

  // Převod na DataGrid rows (musí mít unikátní id)
  const rows: GridRowsProp = standardsData.map((item, index) => ({
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

  const paragraphs = ["freedom", "familySpace", "activeLife", "quietLife", "newHome"];

  // Local animated paragraph component
  const AnimatedParagraph = ({ paragraphKey }: { paragraphKey: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <Stack ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Typography variant="h3" color={"primary"}>
            {t(`standards.paragraphs.${paragraphKey}.title`)}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <Typography>
            {t(`standards.paragraphs.${paragraphKey}.paragraph`)}
          </Typography>
        </motion.div>
      </Stack>
    );
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 4, pt: 4 }}>
      <Typography variant={"h2"}>{t("standards.meaning")}</Typography>
      <Stack>
        {paragraphs.map((key) => (
          <AnimatedParagraph key={key} paragraphKey={key} />
        ))}
      </Stack>

      <Typography variant={"h2"}>{t("standards.title")}</Typography>
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
    </Container>
  );
};
