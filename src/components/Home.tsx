import { Jumbotron } from "./Jumbotron.tsx";
import { Standards } from "./Standards.tsx";
import { Houses } from "./Houses.tsx";
import { Collapse, Container, Stack } from "@mui/material";
import { Gallery } from "./Gallery.tsx";
import { PropertyList } from "./PropertyList.tsx";
import { data } from "../constants/data.ts";
import { AppButton } from "./AppButton.tsx";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router";
import { base } from "../constants/constants.ts";
import { apartmentToCol } from "../utils/apartmentToCol.ts";
import { useScrollToTopOnLoad } from "../hook/useScrollToTopOnLoad.ts";

export const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  useScrollToTopOnLoad([]);

  const allApartments = data.flatMap((house) => house.apartments.map((ap) => apartmentToCol(ap, house)));
  return (
    <Stack>
      <Jumbotron />
      <Houses />
      <Container>
        <Stack alignItems={"center"} gap={1}>
          <AppButton
            icon={showTable ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={() => setShowTable((prev) => !prev)}
            title={"Seznam všech bytů"}
          />

          <Collapse in={showTable} style={{ width: "100%" }}>
            <PropertyList apartments={allApartments} onClickProperty={(id) => navigate(`/${base}/${id}`)} />
          </Collapse>
        </Stack>
      </Container>

      <Standards />
      <Gallery />
    </Stack>
  );
};
