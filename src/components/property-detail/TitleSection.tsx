import { Box, Stack, Typography } from "@mui/material";
import { Colors } from "../../theme/colors.ts";

import type { HouseDetail } from "../../model/HouseDetail.ts";

type Props = {
  house: HouseDetail;
  image?: string; // Optional image prop, if needed
};

export const TitleSection = ({ house, image }: Props) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        height: { md: "100vh" },
        pt: 5,
      }}
    >
      <Box
        component="img"
        src={image}
        alt="House visualization"
        sx={{
          height: {
            xs: "30%", // mobile
            sm: "50%", // tablet
            md: "70%", // desktop
          },
          maxWidth: "90%",
          objectFit: "contain",
        }}
      />
      <Typography variant={"h2"} letterSpacing={1} textAlign={"center"} flex={1} color={Colors.primary} p={0}>
        {house.name}
      </Typography>
    </Stack>
  );
};
