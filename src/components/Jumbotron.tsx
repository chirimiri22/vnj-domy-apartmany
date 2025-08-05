import { Box, Container, Stack, Typography } from "@mui/material";
import { Colors } from "../theme/colors.ts";
import video from "../assets/video.mp4";

export const Jumbotron = () => {
  const viewportHeight = window.innerHeight;
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
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
          <Typography variant={"h1"} letterSpacing={1} textAlign={"center"}>
            Bydlete
            <br />v <Box sx={{ display: "inline-block", color: Colors.primary }}>dokonalém</Box> luxusu
          </Typography>
        </Container>
      </Stack>
    </Stack>
  );
};
