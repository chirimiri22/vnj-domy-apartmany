import type { ThemeOptions } from "@mui/material";
import { Colors } from "./colors.ts";
import { MuiButtonOverrides } from "./overrides/MuiButtonOverrides.ts";

export const themeOptions: ThemeOptions = {
  spacing: 10,

  // Typography
  typography: {
    h1: {
      fontSize: 100,
      fontWeight: 300,
      fontFamily: "Cormorant Garamond",
    },
    h2: {
      fontSize: 64,
      letterSpacing: 0.8,
      fontWeight: 300,
      textAlign: "center",
      fontFamily: "Cormorant Garamond",
      marginTop: 80,
      marginBottom: 50,
    },
    h3: {
      fontSize: 32,
      fontFamily: "Cormorant Garamond",
      marginTop: 40,
      marginBottom: 20,
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
