import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Jumbotron } from "./components/Jumbotron.tsx";
import { Footer } from "./components/Footer.tsx";
import { BrowserRouter } from "react-router";
import { themeOptions } from "./theme/themeOptions.ts";
import { Standards } from "./components/Standards.tsx";
import { Houses } from "./components/Houses.tsx";
import { LicenseInfo } from "@mui/x-license";

const theme = createTheme(themeOptions);
LicenseInfo.setLicenseKey(import.meta.env.REACT_APP_MUI_LICENCE_KEY ?? "");

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Jumbotron />
        <Standards />
        <Houses />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
