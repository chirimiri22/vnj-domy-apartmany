import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Jumbotron } from "./components/Jumbotron.tsx";
import { Footer } from "./components/Footer.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeOptions } from "./theme/themeOptions.ts";
import { Standards } from "./components/Standards.tsx";
import { Houses } from "./components/Houses.tsx";
import { LicenseInfo } from "@mui/x-license";
import { PropertyDetail } from "./components/PropertyDetail.tsx";
import { Header } from "./components/Header.tsx";

const theme = createTheme(themeOptions);
LicenseInfo.setLicenseKey(import.meta.env.REACT_APP_MUI_LICENCE_KEY ?? "");

export const base= "vnj-domy-apartmany"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route
            path={base}
            element={
              <>
                <Jumbotron />
                <Standards />
                <Houses />
                <Footer />
              </>
            }
          />

          <Route path={`${base}/:id`} element={<PropertyDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
