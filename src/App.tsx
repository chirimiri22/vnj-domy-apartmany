import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Jumbotron } from "./components/Jumbotron.tsx";
import { Footer } from "./components/Footer.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeOptions } from "./theme/themeOptions.ts";
import { LicenseInfo } from "@mui/x-license";
import { PropertyDetail } from "./components/property-detail/PropertyDetail.tsx";
import { Header } from "./components/Header.tsx";
import { Home } from "./components/Home.tsx";
import { base } from "./constants/constants.ts";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import "swiper/css";
import "swiper/css/navigation";

const theme = createTheme(themeOptions);
LicenseInfo.setLicenseKey(import.meta.env.REACT_APP_MUI_LICENCE_KEY ?? "");

export const isMobile = window.innerWidth <= 768;

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path={base} element={<Home />} />
            <Route path={`${base}/:id`} element={<PropertyDetail />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
