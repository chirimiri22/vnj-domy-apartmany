import { Box, type BoxProps, Button, Stack, Typography } from "@mui/material";
import { Colors } from "../../theme/colors.ts";
import { motion, type MotionProps } from "framer-motion";

import type { HouseDetail } from "../../model/HouseDetail.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { base } from "../../constants/constants.ts";
import { useNavigate } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext.tsx";
import { forwardRef } from "react";
import { HouseType } from "../../constants/HouseTypes.ts";
import visualisationA from "../../assets/pictures/A1-transparent.png";
import visualisationB from "../../assets/pictures/B4-transparent.png";

type Props = {
  house: HouseDetail;
};

type MotionBoxProps = BoxProps & MotionProps;

const MotionBox = motion(
  forwardRef<HTMLDivElement, MotionBoxProps>(function MotionBox(props, ref) {
    return <Box ref={ref} {...props} />;
  })
);
export const TitleSection = ({ house }: Props) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const image = house.type === HouseType.A ? visualisationA : visualisationB


  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        height: { md: "100vh" },
        pt: 5,
      }}
    >
      <Button
        variant={"outlined"}
        sx={{ mb: 6, display: { xs: "flex", md: "none" }, width: "fit-content" }}
        size={"large"}
        onClick={() => navigate(`/${base}`)}
        startIcon={<ArrowBackIcon />}
      >
        {" "}
        {t("common.back")}
      </Button>

      {/* Image animation */}
      <MotionBox
        sx={{
          height: {
            xs: "30%", // mobile
            sm: "50%", // tablet
            md: "70%", // desktop
          },
          width: "100%", // take full width of parent
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          key={image}
          src={image}
          alt="House visualization"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // keeps aspect ratio
          }}
        />
      </MotionBox>

      {/* Title animation (delayed) */}
      <motion.div
        key={house.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        style={{ width: "100%" }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "end" }}
          gap={{ xs: 0, md: 5 }}
          mt={{ xs: 5, md: 0 }}
          mb={{ xs: 3, md: 0 }}
        >
          <Button
            variant={"outlined"}
            sx={{ mb: 1, display: { xs: "none", md: "flex" } }}
            size={"large"}
            onClick={() => navigate(`/${base}`)}
            startIcon={<ArrowBackIcon />}
          >
            {t("common.back")}
          </Button>
          <Typography
            variant={"h2"}
            letterSpacing={1}
            color={Colors.primary}
            mb={0}
            mt={{ xs: 1, md: 4 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            {house.name}
          </Typography>
        </Stack>
      </motion.div>
    </Stack>
  );
};
