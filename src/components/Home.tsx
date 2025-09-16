import { Collapse, Container, Stack } from "@mui/material";
import { useState } from "react";
import { Jumbotron } from "./Jumbotron.tsx";
import { Standards } from "./Standards.tsx";
import { Houses } from "./Houses.tsx";
import { Gallery } from "./Gallery.tsx";
import { PropertyList } from "./PropertyList.tsx";
import { data } from "../constants/data.ts";
import { AppButton } from "./AppButton.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router";
import { base } from "../constants/constants.ts";
import { apartmentToCol } from "../utils/apartmentToCol.ts";
import { useScrollToTopOnLoad } from "../hook/useScrollToTopOnLoad.ts";
import { useLanguage } from "../contexts/LanguageContext";

export const Home = () => {
  const { t } = useLanguage();
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  useScrollToTopOnLoad([]);

  const allApartments = data.flatMap((house) => house.apartments.map((ap) => apartmentToCol(ap, house)));

  return (
    <Stack>
      <Jumbotron />
      <Houses />
      <Container sx={{pb: 6}} >
        <Stack alignItems={"center"} gap={2}>
          <AppButton
            icon={showTable ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={() => setShowTable((prev) => !prev)}
            title={t("common.showAllApartments")}
          />

          <Collapse in={showTable} style={{ width: "100%" }}>
            <PropertyList apartments={allApartments} onClickProperty={(id) => navigate(`/${base}/${id}`)} />
          </Collapse>
        </Stack>
      </Container>

      <Gallery />
      <Standards />


    </Stack>
  );
};
