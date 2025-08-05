import {  Stack } from "@mui/material";
import { useParams } from "react-router";
import { data } from "../../constants/data.ts";
import { useState } from "react";

import visualisation from "../../assets/houses/A1-transparent.png";
import { TitleSection } from "./TitleSection.tsx";
import { Gallery } from "./Gallery.tsx"; // Assuming this is the correct path to your data

export const PropertyDetail = () => {
  const { id } = useParams();

  const [property] = useState(() => data.find((property) => property.id === id));
  if (!property) {
    return "Property not found";
  }
  return (
    <Stack>
      <TitleSection house={property} image={visualisation} />

      <Gallery  />
    </Stack>
  );
};
