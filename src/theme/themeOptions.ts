import type { ThemeOptions } from "@mui/material";
import { Colors } from "./colors.ts";
import { MuiButtonOverrides } from "./overrides/MuiButtonOverrides.ts";

export const themeOptions: ThemeOptions = {
  spacing: 10,

  // Typography
  typography: {
    fontSize: 12.25,
    fontWeightRegular: 300,
    fontFamily: "Cormorant Garamond",

    h1: {
      fontSize: 100,
      fontWeight: 300,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
    },
  },

  // Palette
  palette: {
    mode: "dark",
    background: {
      default: Colors.black,
      paper: Colors.darkGrey,
    },
    text: {
      primary: Colors.white,
    },
    primary: {
      main: Colors.primary,
      // light: Colors.primaryLight,
      // dark: Colors.primaryDark,
      // contrastText: Colors.primaryContrastText,
    },
  },

  // Components
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: Colors.black,
          color: Colors.white,
        },
      },
    },
    MuiButton: MuiButtonOverrides,
  },
};
