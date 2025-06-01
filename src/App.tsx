import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Plan } from "./components/Plan.tsx";
import { Jumbotron } from "./components/Jumbotron.tsx";
import { Footer } from "./components/Footer.tsx";
import { BrowserRouter } from "react-router";
import { themeOptions } from "./theme/themeOptions.ts";

const theme = createTheme(themeOptions);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Jumbotron />
        <Plan />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
