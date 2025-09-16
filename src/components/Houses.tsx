import { Plan } from "./Plan.tsx";
import { Stack, Typography } from "@mui/material";

type Props = {
  title?: string;
};

export const Houses = ({ title }: Props) => {
  return (
    <Stack id={"houses"} overflow={"hidden"}>
      <Typography variant={"h2"}>{title}</Typography>
      <Plan />
    </Stack>
  );
};
