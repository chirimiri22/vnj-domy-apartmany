import { Jumbotron } from "./Jumbotron.tsx";
import { Standards } from "./Standards.tsx";
import { Houses } from "./Houses.tsx";
import { Footer } from "./Footer.tsx";
import { Stack } from "@mui/material";
import { Gallery } from "./property-detail/Gallery.tsx";

export const Home = () => {
  return (
    <Stack>
      <Jumbotron />
      <Standards />
      <Gallery />
      <Houses />
      <Footer />
    </Stack>
  )
}
