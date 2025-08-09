import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { data } from "../../constants/data.ts";
import { useEffect, useState } from "react";

import visualisation from "../../assets/houses/A1-transparent.png";
import { TitleSection } from "./TitleSection.tsx";
import { Gallery } from "./Gallery.tsx";
import { Stats } from "../Stats.tsx";
import { Houses } from "../Houses.tsx";
import { PropertyList } from "../PropertyList.tsx";
import { AppButton } from "../AppButton.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { base } from "../../constants/constants.ts";
import { apartmentToCol } from "../../utils/apartmentToCol.ts";
import { useScrollToTopOnLoad } from "../../hook/useScrollToTopOnLoad.ts";

export const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = data.find((property) => property.id === id);

  useScrollToTopOnLoad([id]);
  if (!id || !property) {
    return "Property not found";
  }
  return (
    <Stack>
      <TitleSection house={property} image={visualisation} />
      <Container>
        <PropertyList apartments={property.apartments.map((ap) => apartmentToCol(ap, property))} />
        <Stats stats={data[0].apartments[0]} />
        <Typography mt={5} mb={8}>
          Dům Alžběta se nachází na pozici 12×3 a nabízí klidné bydlení v moderním rodinném domě s jediným prostorným
          bytem. Tento dům je ideální pro ty, kteří hledají soukromí, komfort a přímý kontakt s přírodou. Dům vyniká
          promyšlenou architekturou a vysokým standardem vybavení. Byt RD1B1 má dispozici 3+kk a nabízí užitnou plochu
          97,74 m², přičemž celková plocha včetně příslušenství činí 103,67 m². K bytu náleží prostorná zahrada o
          velikosti 171,33 m², balkon o ploše 9 m², sklep o velikosti 9,35 m² a jedno garážové stání. Tento byt byl již
          prodán.
        </Typography>
      </Container>

      <Gallery />
      <Houses title={"Ostatní domy"} />
      <Stack alignItems={"center"}>
        <Button variant={"outlined"} size={"large"} onClick={() => navigate(`/${base}`)} startIcon={<ArrowBackIcon />}>
          Zpět
        </Button>
      </Stack>
    </Stack>
  );
};
