import "./App.css";
import * as React from "react";
import ResponsiveAppBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "./theme";

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // This uses the default theme for query before provider

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ResponsiveAppBar />
        <main>
          <section id="aboutme">
            <AboutMe />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contactme">
            <Box mt={isMobile ? "12%" : "5%"}>
              <ContactMe />
              <Footer />
            </Box>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
