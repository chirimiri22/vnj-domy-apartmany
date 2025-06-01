import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { Plan } from "./components/Plan.tsx";
import { Jumbotron } from "./components/Jumbotron.tsx";
import { Footer } from "./components/Footer.tsx";
import { BrowserRouter } from "react-router";
import { themeOptions } from "./theme/themeOptions.ts";
import { PropertyList } from "./components/PropertyList.tsx";
import type { HouseDetail } from "./model/HouseDetail.ts";
import { useEffect, useRef, useState } from "react";

const theme = createTheme(themeOptions);

function App() {
  const [selectedHouse, setSelectedHouse] = useState<HouseDetail>();
  const listContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedHouse]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Jumbotron />
        <Plan onSelectedHouse={setSelectedHouse} />
        <Stack ref={listContainerRef}>{selectedHouse && <PropertyList house={selectedHouse} />}</Stack>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
