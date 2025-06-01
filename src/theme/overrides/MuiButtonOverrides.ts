import type { ComponentsOverrides, ComponentsProps, Theme } from "@mui/material";

export const MuiButtonOverrides: {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
} = {
  defaultProps: {
    variant: "contained",
  },
  styleOverrides: {
    root: {
      borderRadius: 60,
      boxShadow: "0px 0px 11.25px 0px rgba(0, 0, 0, 0.25)",
      padding: "8px 16px",
    },
    outlined: {
      borderWidth: "2px",
      boxShadow: "none",
      fontWeight: 700,
    },
    sizeLarge: {
      fontSize: 16,
      padding: "12px 60px",
    },
  },
};
