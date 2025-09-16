import { Box, Button, Stack, Typography } from "@mui/material";
import { Colors } from "../../theme/colors.ts";

import type { HouseDetail } from "../../model/HouseDetail.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { base } from "../../constants/constants.ts";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext.tsx";

type Props = {
  house: HouseDetail;
  image?: string; // Optional image prop, if needed
};

export const TitleSection = ({ house, image }: Props) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Stack
      // alignItems={"center"}
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
          margin: "0 auto",
        }}
      />

      <Stack direction={"row"} alignContent={"end"} gap={5}>
        <Typography variant={"h2"} letterSpacing={1} color={Colors.primary} mb={0}>
          {house.name}
        </Typography>
        <Stack justifyContent={"end"}>
          <Button
            variant={"outlined"}
            sx={{ mb: 1 }}
            size={"large"}
            onClick={() => navigate(`/${base}`)}
            startIcon={<ArrowBackIcon />}
          >
            {t("common.back")}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
