import { Container, Stack, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { DataGridPremium, gridClasses, type GridColDef, type GridRowsProp } from "@mui/x-data-grid-premium";

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

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 4, pt: 4 }}>
      {/* todo: transaltions */}
      <Typography variant={"h2"}>Bydlení znamená...</Typography>
      <Stack>
        {paragraphs.map((key) => (
          <Stack key={key}>
            <Typography variant="h3" color={"primary"}>
              {t(`standards.paragraphs.${key}.title`)}
            </Typography>
            <Typography>{t(`standards.paragraphs.${key}.paragraph`)}</Typography>
          </Stack>
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

// const StandardItemCard = ({ item }: { item: StandardItem }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [hover, setHover] = useState(false);
//   const maxLength = 70;
//
//   const theme = useTheme();
//   const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // true pro md a větší
//
//   // pokud je menší než md, limit je neomezený
//   const effectiveMaxLength = isMdUp ? maxLength : item.description.length;
//
//   const isLong = item.description.length > effectiveMaxLength;
//   const displayedText = expanded || !isLong ? item.description : item.description.slice(0, effectiveMaxLength) + "...";
//
//   return (
//     <Stack
//       sx={{
//         py: 1,
//         height: "100%",
//         position: "relative",
//       }}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Typography variant="h5" sx={{ fontWeight: 700 }}>
//         {item.category}
//       </Typography>
//
//       <Typography
//         variant="body2"
//         sx={{
//           mt: 1,
//           pr: 4,
//           color: "text.secondary",
//         }}
//       >
//         {displayedText}
//       </Typography>
//
//       {isLong && !expanded && (
//         <Typography
//           variant="body2"
//           sx={{
//             mt: 0.5,
//             color: "primary.main",
//             cursor: "pointer",
//             fontWeight: 500,
//             textTransform: "none",
//             opacity: hover ? 1 : 0.3,
//             transition: "opacity 0.2s",
//           }}
//           onClick={() => setExpanded((prev) => !prev)}
//         >
//           {/*todo: translation*/}
//           více
//         </Typography>
//       )}
//     </Stack>
//   );
// };
