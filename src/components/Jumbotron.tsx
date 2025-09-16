import { Box, Container, Stack, Typography } from "@mui/material";
import { Colors } from "../theme/colors.ts";
import { useLanguage } from "../contexts/LanguageContext";
import video from "../assets/video.mp4";
import { Header } from "./Header.tsx";
import { ArrowDownward } from "@mui/icons-material";
import leafLeft from "../assets/leaf-left.png";
import leafRight from "../assets/leaf-right.png";

export const Jumbotron = () => {
  const { t } = useLanguage();
  const viewportHeight = window.innerHeight;

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Header sx={{ position: "absolute", top: 0, zIndex: 10 }} />

      {/*todo: when page is shown on mobile we need to adjust the video size*/}
      <video
        autoPlay
        muted
        loop
        playsInline
        width={"100%"}
        height={viewportHeight}
        style={{
          objectFit: "cover",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <Stack
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))",
        }}
      >
        <Container>
          <Typography variant="h1" sx={{ typography: { xs: "h2", md: "h1" } }} letterSpacing={1} textAlign={"center"}>
            {t("jumbotron.live")}
            <br />
            {t("jumbotron.in")}{" "}
            <Box sx={{ display: "inline-block", color: Colors.primary }}>{t("jumbotron.perfect")}</Box>{" "}
            {t("jumbotron.luxury")}
          </Typography>

          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
            <img src={leafLeft} alt="Leaf left" width={40} />
            <Typography fontWeight={"bold"} fontSize={"large"} fontStyle="italic">
              &#34;{t("jumbotron.motto")}&#34;
            </Typography>
            <img src={leafRight} alt="Right left" width={40} />
          </Stack>
        </Container>
        <ArrowDownward
          fontSize={"large"}
          sx={{ cursor: "pointer", position: "absolute", bottom: 40 }}
          onClick={() => {
            const element = document.getElementById("houses");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </Stack>
    </Stack>
  );
};
