import { Container, Stack, type SxProps } from "@mui/material";

import { AppLink } from "./AppLink";
import { useLanguage } from "../contexts/LanguageContext";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { mapUrl } from "../constants/constants.ts";
import { isMobile } from "../App.tsx";

const languages = ["cz", "en"] as const;

type Props = {
  sx: SxProps;
};

export const Header = ({ sx }: Props) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Stack sx={{ py: 1, flexDirection: "row", width: "100%", ...sx }}>
      <Container sx={{ position: "relative" }}>
        <AppLink
          startIcon={<PlaceOutlinedIcon />}
          title={isMobile ? "" : t("navigation.vysokeNadJizerou")}
          onClick={() => {
            window.open(mapUrl);
          }}
        />
        <Stack
          direction={"row"}
          justifyContent="center"
          gap={2}
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX( -50%)",
          }}
        >
          {languages.map((lang) => (
            <AppLink
              key={lang}
              title={t(`header.languages.${lang}`)}
              active={language === lang}
              onClick={() => setLanguage(lang)}
            />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
