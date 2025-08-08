import { Grid, Stack, Typography } from "@mui/material";
import type { Apartment } from "../model/Apartment.ts";
import { Colors } from "../theme/colors.ts";

type Props = {
  stats: Apartment;
};

const apartmentStats: {
  [K in keyof Apartment]?: { name: string; unit: string };
} = {
  balcony: { name: "Balkon", unit: "m²" },
  garden: { name: "Zahrada", unit: "m²" },
  storage: { name: "Sklep", unit: "m²" },
  garage: { name: "Garáž", unit: "m²" },
  usable_area: { name: "Užitná plocha", unit: "m²" },
  totalArea: { name: "Celková plocha", unit: "m²" },
  layout: { name: "Dispozice", unit: "" },
  number: { name: "Číslo bytu", unit: "" },
};

export const Stats = (props: Props) => {
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
