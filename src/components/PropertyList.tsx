import type { HouseDetail } from "../model/HouseDetail.ts";
import { Stack, Typography } from "@mui/material";

type Props = {
  selectedHouse: HouseDetail;
};

export const PropertyList = (props: Props) => {
  return (
    <Stack>
      <Typography variant={"h2"}>{props.selectedHouse.name}</Typography>
    </Stack>
  );
};
