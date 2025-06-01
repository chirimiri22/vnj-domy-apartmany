import type { Apartment } from "../model/Apartment";
import { Stack } from "@mui/material";

type Props = {
  data: Apartment;
};

export const PropertyDetail = ({ data }: Props) => {
  return (
    <Stack>
      <strong>{data.number}</strong>
      todo
    </Stack>
  );
};
