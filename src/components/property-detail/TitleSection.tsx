import { Box, Stack, Typography } from "@mui/material";
import { Colors } from "../../theme/colors.ts";

import type { HouseDetail } from "../../model/HouseDetail.ts";

type Props = {
  house: HouseDetail;
  image?: string; // Optional image prop, if needed
};

export const TitleSection = ({ house, image }: Props) => {
  return (
    <Stack alignItems={"center"} height={"100vh"}>
      {/* todo: in case this is not needed refactor*/}
      <Typography variant={"h2"} letterSpacing={1} textAlign={"center"}>
        <Box sx={{ display: "inline-block", color: Colors.primary }}>{house.name}</Box>
      </Typography>

      <Stack >
        <img
          src={image}
          alt="House visualization"
        />
      </Stack>
    </Stack>
  );
};
