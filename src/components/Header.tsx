import { Stack } from "@mui/material";

import { AppLink } from "./AppLink";
import { useLanguage } from "../contexts/LanguageContext";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const languages = [ "cz", "en"] as const;

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Stack direction="row" position={"relative"} p={1} px={2}>
      <AppLink
        startIcon={<PlaceOutlinedIcon />}
        title={t("navigation.vysokeNadJizerou")}
        onClick={() => {
          window.open("https://www.google.com");
        }}
      />
      <Stack
        direction={"row"}
        justifyContent="center"
        gap={2}
        sx={{
          position: "absolute",

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
    </Stack>
  );
};
