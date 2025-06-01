import { Plan } from "./Plan.tsx";
import { Stack, Typography } from "@mui/material";
import { PropertyList } from "./PropertyList.tsx";
import { useEffect, useRef, useState } from "react";
import type { HouseDetail } from "../model/HouseDetail.ts";

export const Houses = () => {
  const [selectedHouse, setSelectedHouse] = useState<HouseDetail>();
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedHouse]);

  return (
    <Stack>
      <Typography variant={"h2"}>Vyberte si svůj dům</Typography>
      <Plan onSelectedHouse={setSelectedHouse} />
      <Stack ref={listContainerRef}>{selectedHouse && <PropertyList house={selectedHouse} />}</Stack>
    </Stack>
  );
};
