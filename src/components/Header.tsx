import { Box, Stack } from "@mui/material";

import { AppLink } from "./AppLink";
import { useState } from "react";

const languages = ["en", "cz"];

export const Header = () => {
  const [locale, setLocale] = useState("en");

  return (
    <Stack direction="row" pb="4" justifyContent={"space-between"}>
      {/* Address */}
      Address
      {/* Language Toggle */}
      <Box order={{ xs: -1, lg: 0 }} flex={1} display="flex" justifyContent="center" gap={2}>
        {languages.map((lang) => (
          <AppLink key={lang} title={lang.toUpperCase()} active={locale === lang} onClick={() => setLocale(lang)} />
        ))}
      </Box>
      something
    </Stack>
  );
};
