import { Plan } from "./Plan.tsx";
import { Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { HouseDetail } from "../model/HouseDetail.ts";

type Props = {
  title?: string;
};

export const Houses = ({ title }: Props) => {
  const [selectedHouse, setSelectedHouse] = useState<HouseDetail>();
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedHouse]);

  return (
    <Stack>
      <Typography variant={"h2"}>{title}</Typography>
      <Plan onSelectedHouse={setSelectedHouse} />
    </Stack>
  );
};
