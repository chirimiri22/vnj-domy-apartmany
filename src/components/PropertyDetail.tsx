// import type { Apartment } from "../model/Apartment";
import { Stack } from "@mui/material";
import { useParams } from "react-router";


export const PropertyDetail = () => {
  const {id} = useParams();
  return (
    <Stack>
      <strong>{id}</strong>
      PROPERTY DETAIL
    </Stack>
  );
};
