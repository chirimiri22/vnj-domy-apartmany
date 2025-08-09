import { Box, Stack } from "@mui/material";

import { AppLink } from "./AppLink";
import { useState } from "react";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const languages = ["en", "cz"];

export const Header = () => {
  const [locale, setLocale] = useState("en");

  return (
    <Stack direction="row" p={1} px={2} justifyContent={"space-between"}>
      <Stack />
      <Stack direction={"row"} justifyContent="center" gap={2}>
        {languages.map((lang) => (
          <AppLink key={lang} title={lang.toUpperCase()} active={locale === lang} onClick={() => setLocale(lang)} />
        ))}
      </Stack>
      <AppLink
        startIcon={<PlaceOutlinedIcon />}
        title={"Vysoké nad Jizerou"}
        onClick={() => {
          window.open("https://www.google.com");
        }}
      />
    </Stack>
  );
};
