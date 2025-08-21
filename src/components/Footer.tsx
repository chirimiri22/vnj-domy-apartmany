import { Stack } from "@mui/material";
import { Colors } from "../theme/colors.ts";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <Stack
      component="footer"
      alignItems="center"
      justifyContent="center"
      sx={{ py: 2, color: Colors.white, opacity: 0.7 }}
    >
      {t("footer.copyright")}
    </Stack>
  );
};
