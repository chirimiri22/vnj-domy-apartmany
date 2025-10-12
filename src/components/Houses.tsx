import { Plan } from "./Plan.tsx";
import { PenzionPlan } from "./PenzionPlan";
import { Stack, Typography, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

type Props = {
  title?: string;
};

const TabTible = ({ title }: { title: string }) => (
  <Typography variant="h2" fontFamily={"Cormorant Garamond"} textTransform={"initial"} my={2}>
    {title}
  </Typography>
);

export const Houses = ({ title }: Props) => {
  const [tab, setTab] = useState(0);
  return (
    <Stack id={"houses"} overflow={"hidden"} mt={6}>
      {title && <Typography variant={"h2"}>{title}</Typography>}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant={"fullWidth"}
        sx={{ mb: 6, borderBottom: 3, borderColor: "divider" }}
      >
        <Tab label={<TabTible title={"Nová výstavba"} />} sx={{ minHeight: 20, py: 0 }} />
        <Tab label={<TabTible title={"Penzion"} />} sx={{ minHeight: 20, py: 0 }} />
      </Tabs>

      {tab === 0 && <Plan />}
      {tab === 1 && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
          <PenzionPlan />
        </Box>
      )}
    </Stack>
  );
};
