import { Grid, Stack, Typography } from "@mui/material";
import type { Apartment } from "../../model/Apartment.ts";
import { Colors } from "../../theme/colors.ts";
import { useLanguage } from "../../contexts/LanguageContext";

type Props = {
  stats: Apartment;
};

export const Stats = (props: Props) => {
  const { t } = useLanguage();
  
  const apartmentStats: {
    [K in keyof Apartment]?: { name: string; unit: string };
  } = {
    balcony: { name: t("stats.balcony"), unit: "m²" },
    garden: { name: t("stats.garden"), unit: "m²" },
    storage: { name: t("stats.storage"), unit: "m²" },
    garage: { name: t("stats.garage"), unit: "m²" },
    usable_area: { name: t("stats.usableArea"), unit: "m²" },
    totalArea: { name: t("stats.totalArea"), unit: "m²" },
    layout: { name: t("stats.layout"), unit: "" },
    // number: { name: t("stats.apartmentNumber"), unit: "" },
  };

  return (
    <Grid container spacing={1}>
      {Object.keys(props.stats)
        .filter((s) => s in apartmentStats)
        .map((stat: string) => {
          const key = stat as keyof Apartment;
          return (
            <Grid size={{ xs: 6, md: 3 }} key={stat}>
              <Stack>
                <Stack direction="row" alignItems="baseline" spacing={1}>
                  <Typography variant="h4" fontWeight={600} sx={{ letterSpacing: "-0.015em" }}>
                    {props.stats[key]}
                  </Typography>

                  <Typography variant="body2" color={Colors.secondary}>
                    {apartmentStats[key]?.unit}
                  </Typography>
                </Stack>
                <Typography variant="body2" fontWeight={500} color={Colors.secondary}>
                  {apartmentStats[key]?.name}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
    </Grid>
  );
};
