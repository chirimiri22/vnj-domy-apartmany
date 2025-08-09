import { Stack } from "@mui/material";
import { Colors } from "../theme/colors.ts";

export const Footer = () => {
  return (
    <Stack component="footer" alignItems="center" justifyContent="center" sx={{ py: 2, color: Colors.white, opacity: 0.7 }}>
      © 2024 Your Company. All rights reserved.
    </Stack>
  );
};
