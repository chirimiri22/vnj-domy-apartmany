import { Container, Grid, Stack, Typography } from "@mui/material";
import { Colors } from "../theme/colors.ts";
import { useLanguage } from "../contexts/LanguageContext";

type StandardItem = {
  category: string;
  description: string;
}

export const Standards = () => {
  const { t } = useLanguage();
  
  const standardsData: StandardItem[] = [
    { category: t("standards.categories.foundation"), description: t("standards.descriptions.foundation") },
    { category: t("standards.categories.exteriorWalls"), description: t("standards.descriptions.exteriorWalls") },
    { category: t("standards.categories.ceiling"), description: t("standards.descriptions.ceiling") },
    // { category: t("standards.categories.stairs"), description: t("standards.descriptions.stairs") },
    { category: t("standards.categories.roof"), description: t("standards.descriptions.roof") },
    { category: t("standards.categories.waterMeters"), description: t("standards.descriptions.waterMeters") },
    { category: t("standards.categories.heating"), description: t("standards.descriptions.heating") },
    { category: t("standards.categories.electrical"), description: t("standards.descriptions.electrical") },
    { category: t("standards.categories.ventilation"), description: t("standards.descriptions.ventilation") },
    // { category: t("standards.categories.furniture"), description: t("standards.descriptions.furniture") },
  ];

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 4 }}>
      <Typography variant={"h2"}>{t("standards.title")}</Typography>
      {/*<Stats stats={data[0].apartments[0]} />*/}
      <Typography sx={{ color: Colors.secondary }}>
        {t("standards.description")}
      </Typography>
      <Typography sx={{ color: Colors.secondary }}>
        {t("standards.secondDescription")}
      </Typography>

      {/*<Typography variant={"h2"}>Standardní provedení</Typography>*/}
      <Grid container spacing={3} my={5}>
        {standardsData.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Stack
              sx={{
                py: 1,
                height: "100%",
                // border: "1px solid white", backgroundColor: "transparent", borderRadius: 2
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {item.category}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: Colors.secondary }}>
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
